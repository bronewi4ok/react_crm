import type { RouteTypes } from '../../types/router'
import { authRoutes } from './authRoutes'
import { mainRoutes } from './mainRoutes'

export const mainRoutesList = Object.values(mainRoutes) as RouteTypes[]
export const authRoutesList = Object.values(authRoutes) as RouteTypes[]
export const menuRoutes = mainRoutesList.filter((route) => route.meta.isInMenu)
