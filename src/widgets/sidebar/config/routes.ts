import { frontRoutes, type RouteTypes } from '@shared/routes'

export const mainRoutesList = Object.values(frontRoutes.main) as RouteTypes[]
export const menuRoutes = mainRoutesList.filter((route) => route.meta.isInMenu)
