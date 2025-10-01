import type { NonIndexRouteObject } from 'react-router-dom'
import { routesList } from '../model/utils'

export const routerChildren: NonIndexRouteObject[] = routesList.map(
  (route) => ({
    path: route.path,
    handle: { meta: route.meta },
    lazy: async () => ({ Component: (await route.component()).default }),
  }),
)
