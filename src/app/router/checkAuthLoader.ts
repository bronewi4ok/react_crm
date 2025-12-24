import { store } from '@/app/store/store'
import { authApi } from '@/features/auth/api/authApi'
import { authRoutes, mainRoutes } from '@/shared/config/router'
import type { RouteTypes } from '@/shared/types'
import type { Mutex } from 'async-mutex'
import { redirect } from 'react-router-dom'

export const checkAuthLoader =
  ({ refreshMutex }: { refreshMutex: Mutex }) =>
  async (route: RouteTypes) => {
    const meta = route?.meta
    const requireAuth = meta?.requireAuth
    const allowedRoles = meta?.roles || []

    let user = store.getState().auth.user
    const loaderData = { user, isAuthenticated: !!user }

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
          if (!user) throw redirect(authRoutes.login.navPath)
          loaderData.user = user
          loaderData.isAuthenticated = !!user
        } finally {
          release()
        }
      }

      if (
        allowedRoles?.length > 0 &&
        (!user?.role || !allowedRoles.includes(user.role))
      ) {
        throw redirect(mainRoutes.notFound.navPath)
      }
    }

    return loaderData
  }
