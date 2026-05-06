import { authRoutes } from './auth-routes'
import { mainRoutes } from './main-routes'

export const FRONT_ROUTES = {
  main: mainRoutes,
  auth: authRoutes,
} as const
