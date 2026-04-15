import { store } from '@/app/store'
import { authApi } from '@entities/auth'
import { frontRoutes, type RouteTypes } from '@shared/routes'
import { redirect } from 'react-router-dom'

export const checkAuthLoader = (route: RouteTypes) => async () => {
  const { requireAuth = false, roles: allowedRoles = [] } = route.meta ?? {}
  let user = store.getState().auth.user
  const isAuthPage = route.path.startsWith('/auth')

  if (!user) {
    try {
      const result = await store.dispatch(authApi.endpoints.refresh.initiate()).unwrap()
      user = result.user
    } catch {
      // store.dispatch(logout())
    }
  }

  if (user && isAuthPage) throw redirect(frontRoutes.main.HomePage.navPath)
  if (requireAuth && !user) throw redirect(frontRoutes.auth.LoginPage.navPath)
  if (requireAuth && user && allowedRoles.length > 0) {
    const hasRole = allowedRoles.includes(user.role!)
    if (!hasRole) throw redirect(frontRoutes.main.Page404.navPath)
  }

  return { user, isAuthenticated: !!user }
}
