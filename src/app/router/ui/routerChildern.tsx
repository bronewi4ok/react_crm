import { Loading } from '@/shared/ui/loading/Loading'
import type { NonIndexRouteObject } from 'react-router-dom'
import { routesList } from '../model/utils'

export const routerChildren: NonIndexRouteObject[] = routesList.map(
  (route) => ({
    path: route.path,
    loader: async () => null,
    lazy: async () => {
      const module = await route.component()
      return { Component: module.default }
    },
    handle: { meta: route.meta },
    hydrateFallbackElement: <Loading />,
  }),
)
