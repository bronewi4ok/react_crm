import { FRONT_ROUTES, type RouteTypes } from '@shared/routes'

export const mainRoutesList = Object.values(FRONT_ROUTES.main) as RouteTypes[]
export const menuRoutes = mainRoutesList.filter((route) => route.meta.isInMenu)
