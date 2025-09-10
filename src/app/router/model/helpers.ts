import { useLocation } from 'react-router-dom'
import { frontRoutes } from './frontRoutes'
import type { frontRouteTypes } from './frontRoutes.types'

export function getPagesList(): frontRouteTypes[] {
  return Object.values(frontRoutes.pages)
}

export function getRoutePath(route: frontRouteTypes): string {
  return typeof route.path === 'string' ? route.path : route.path()
}

export function findRouteByPath(path: string): frontRouteTypes | undefined {
  return getPagesList().find((route) =>
    typeof route.path === 'string' ? route.path === path : false,
  )
}

export function useCurrentPageTitle(): string {
  const { pathname } = useLocation()
  return findRouteByPath(pathname)?.meta.title ?? ''
}
