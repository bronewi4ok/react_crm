import { useMatches } from 'react-router-dom'
import { routes } from './configs'
import type { RouteMetaTypes, RouteTypes } from './types'

export function useCurrentPageMeta(): RouteMetaTypes | undefined {
  const matches = useMatches() as { handle?: { meta?: RouteMetaTypes } }[]
  return [...matches].reverse().find((m) => m.handle?.meta)?.handle?.meta
}

export const routesList = Object.values(routes) as RouteTypes[]
export const menuRoutes = routesList.filter((route) => route.meta.isInMenu)

// export function getMenuRoutes(userRoles: RoleTypes[]): RouteTypes[] {
//   return routesList.filter(
//     (route) =>
//       route.meta.isInMenu &&
//       (!route.meta.roles ||
//         route.meta.roles.some((r) => userRoles.includes(r))),
//   )
// }

// const menuRoutes = useMemo(
//   () => getMenuRoutes(currentUser.roles),
//   [currentUser.roles],
// )
