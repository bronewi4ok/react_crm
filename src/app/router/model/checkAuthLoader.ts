import { store } from '@/app/store'
import { authApi } from '@/features/auth/'
import { frontRoutes } from '@/shared/config/routes'
import type { RouteTypes } from '@/shared/types'
import type { Mutex } from 'async-mutex'
import { redirect, type LoaderFunctionArgs } from 'react-router-dom'

type AuthUserTypes = ReturnType<typeof store.getState>['auth']['user']

export type CheckAuthLoaderDataTypes = {
  user: AuthUserTypes
  isAuthenticated: boolean
}

export type CheckAuthRouteLoaderTypes = (
  args: LoaderFunctionArgs,
) => Promise<CheckAuthLoaderDataTypes>

export const checkAuthLoader =
  ({ refreshMutex }: { refreshMutex: Mutex }) =>
  (route: RouteTypes): CheckAuthRouteLoaderTypes =>
  async () => {
    const requireAuth = route.meta.requireAuth
    const allowedRoles = route.meta.roles || []

    let user = store.getState().auth.user
    const loaderData: CheckAuthLoaderDataTypes = { user, isAuthenticated: !!user }

    if (requireAuth) {
      if (refreshMutex.isLocked()) {
        await refreshMutex.waitForUnlock()
        user = store.getState().auth.user
        loaderData.user = user
        loaderData.isAuthenticated = !!user
      }

      if (!user) {
        const release = await refreshMutex.acquire()
        try {
          await store.dispatch(authApi.endpoints.refresh.initiate())
          user = store.getState().auth.user
          if (!user) throw redirect(frontRoutes.auth.LoginPage.navPath)
          loaderData.user = user
          loaderData.isAuthenticated = !!user
        } finally {
          release()
        }
      }

      if (allowedRoles?.length > 0 && (!user?.role || !allowedRoles.includes(user.role))) {
        throw redirect(frontRoutes.main.Page404.navPath)
      }
    }

    return loaderData
  }
