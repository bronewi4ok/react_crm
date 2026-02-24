import { frontRoutes } from '@/shared/config/routes'
import type { RouteTypes } from '@/shared/types'

export const mainRoutesList = Object.values(frontRoutes.main) as RouteTypes[]
export const menuRoutes = mainRoutesList.filter((route) => route.meta.isInMenu)
