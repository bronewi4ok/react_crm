import { Loading } from '@/shared/ui/Loading/ui/Loading'
import type { NonIndexRouteObject } from 'react-router-dom'
import { frontRoutes } from './frontRoutes'

export const appRouterRoutes: NonIndexRouteObject[] = Object.values(
  frontRoutes.pages,
).map((route) => ({
  path: route.path,
  loader: async () => null,
  lazy: async () => {
    const module = await route.component()
    return { Component: module.default }
  },

  hydrateFallbackElement: <Loading />,
}))
