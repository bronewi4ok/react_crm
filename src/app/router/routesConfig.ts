import type { Role } from './roles'

export type RouteMeta = {
  title: string
  isInMenu: boolean
  requireAuth: boolean
  roles?: Role[]
}

export type RouteConfig = {
  path: string | ((...args: string[]) => string)
  meta: RouteMeta
  component: () => Promise<{ default: React.ComponentType<unknown> }>
}
