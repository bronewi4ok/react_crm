import { store } from '@/app/store'
import { authApi } from '@/features/auth'
import { frontRoutes } from '@/shared/config/routes'
import type { RouteTypes } from '@/shared/types'
import type { Mutex } from 'async-mutex'
import { redirect, type LoaderFunctionArgs } from 'react-router-dom'

type AuthUserTypes = ReturnType<typeof store.getState>['auth']['user']

export type CheckAuthLoaderDataTypes = {
  user: AuthUserTypes
  isAuthenticated: boolean
}

/**
 * Універсальний лоадер для перевірки авторизації та ролей.
 * Замінює потребу в AuthInit, оскільки виконується ПЕРЕД рендером будь-якого роута.
 */
export const checkAuthLoader =
  ({ refreshMutex }: { refreshMutex: Mutex }) =>
  (route: RouteTypes) =>
  async ({ request }: LoaderFunctionArgs): Promise<CheckAuthLoaderDataTypes> => {
    const { requireAuth, trySilentAuth = false, roles: allowedRoles = [] } = route.meta
    const url = new URL(request.url)
    const isAuthPage = url.pathname.startsWith('/auth')
    const shouldTryRefresh = requireAuth || isAuthPage || trySilentAuth

    // 1. ШВИДКА ПЕРЕВІРКА: Якщо юзер вже в Store і він на /auth — редирект на головну
    let user = store.getState().auth.user
    if (user && isAuthPage) {
      throw redirect(frontRoutes.main.HomePage.navPath)
    }

    // 2. Спроба Refresh (якщо юзера немає в Store)
    if (!user && shouldTryRefresh) {
      if (refreshMutex.isLocked()) {
        await refreshMutex.waitForUnlock()
        user = store.getState().auth.user

        if (user && isAuthPage) {
          throw redirect(frontRoutes.main.HomePage.navPath)
        }
      }

      if (!user) {
        const release = await refreshMutex.acquire()
        try {
          await store.dispatch(authApi.endpoints.refresh.initiate()).unwrap()
          user = store.getState().auth.user

          // ПІСЛЯ УСПІШНОГО РЕФРЕШУ: Якщо ми на сторінці логіну — редирект на головну
          if (user && isAuthPage) {
            throw redirect(frontRoutes.main.HomePage.navPath)
          }
        } catch (error) {
          if (error instanceof Response) {
            throw error
          }

          if (requireAuth) throw redirect(frontRoutes.auth.LoginPage.navPath)
        } finally {
          release()
        }
      }
    }

    // 3. Перевірка доступу (захищені роути)
    if (requireAuth) {
      if (!user) throw redirect(frontRoutes.auth.LoginPage.navPath)
      if (allowedRoles.length > 0 && (!user.role || !allowedRoles.includes(user.role))) {
        throw redirect(frontRoutes.main.Page404.navPath)
      }
    }

    return { user, isAuthenticated: !!user }
  }
