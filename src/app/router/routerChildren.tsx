import { authRouteRuntime } from '@/app/router/config/authRouteRuntime'
import { mainRouteRuntime } from '@/app/router/config/mainRouteRuntime'
import { checkAuthLoader } from '@/app/router/checkAuthLoader'
import { authRoutes, mainRoutes } from '@/shared/config/router'
import { refreshMutex } from '@/shared/lib/refreshMutex'
import type { RouteObject } from 'react-router-dom'

const authLoader = checkAuthLoader({ refreshMutex })

type MainRouteKeyTypes = keyof typeof mainRoutes
type MainRouteValueTypes = (typeof mainRoutes)[MainRouteKeyTypes]

const mainRoutesEntries = Object.entries(mainRoutes) as [MainRouteKeyTypes, MainRouteValueTypes][]

export const mainRoutesChildren: RouteObject[] = mainRoutesEntries
  .filter(([routeKey]) => mainRouteRuntime[routeKey].access.requireAuth || routeKey === 'notFound')
  .map(([routeKey, route]) => {
    const runtimeRoute = mainRouteRuntime[routeKey]

    return {
      path: route.path,
      handle: { meta: route.meta },
      loader: runtimeRoute.access.requireAuth ? () => authLoader(runtimeRoute.access) : undefined,
      lazy: async () => ({ Component: (await runtimeRoute.component()).default }),
    }
  })

type AuthRouteKeyTypes = keyof typeof authRoutes
type AuthRouteValueTypes = (typeof authRoutes)[AuthRouteKeyTypes]

const authRoutesEntries = Object.entries(authRoutes) as [AuthRouteKeyTypes, AuthRouteValueTypes][]

export const authRoutesChildren: RouteObject[] = authRoutesEntries.map(([routeKey, route]) => ({
  path: route.path,
  handle: { meta: route.meta },
  lazy: async () => ({ Component: (await authRouteRuntime[routeKey].component()).default }),
}))
