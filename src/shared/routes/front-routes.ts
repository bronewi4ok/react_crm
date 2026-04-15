import { authRoutes } from './auth-routes'
import { mainRoutes } from './main-routes'

export const frontRoutes = {
  main: mainRoutes,
  auth: authRoutes,
} as const
