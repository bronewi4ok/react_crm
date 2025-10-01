import { useMatches } from 'react-router-dom'
import { routes } from './configs'
import type { RouteMetaTypes, RouteTypes } from './types'

export function useCurrentPageMeta(): RouteMetaTypes | undefined {
  const matches = useMatches() as { handle?: { meta?: RouteMetaTypes } }[]
  return [...matches].reverse().find((m) => m.handle?.meta)?.handle?.meta
}

export const routesList = Object.values(routes) as RouteTypes[]
export const menuRoutes = routesList.filter((route) => route.meta.isInMenu)
