import { checkAuthLoader } from '@/app/router/checkAuthLoader'
import { authRoutesList, mainRoutes, mainRoutesList } from '@/shared/config/router/'
import { refreshMutex } from '@/shared/lib/refreshMutex'
import type { RouteObject } from 'react-router-dom'

const authLoader = checkAuthLoader({ refreshMutex })

export const mainRoutesChildren = mainRoutesList
  .filter((route) => route.meta.requireAuth || route.path === mainRoutes.notFound.path)
  .map((route) => ({
    path: route.path,
    handle: { meta: route.meta },
    loader: route.meta.requireAuth ? () => authLoader(route) : undefined,
    lazy: async () => ({ Component: (await route.component()).default }),
  }))

export const authRoutesChildren: RouteObject[] = authRoutesList.map((route) => ({
  path: route.path,
  handle: { meta: route.meta },
  lazy: async () => ({ Component: (await route.component()).default }),
}))
