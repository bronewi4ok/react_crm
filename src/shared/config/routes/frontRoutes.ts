import { authRoutes } from './authRoutes'
import { mainRoutes } from './mainRoutes'

export const frontRoutes = {
  main: mainRoutes,
  auth: authRoutes,
} as const
