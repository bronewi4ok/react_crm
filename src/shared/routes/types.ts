import type { RoleTypes } from '../auth'

export type RouteMetaTypes = {
  title: string
  isInMenu: boolean
  requireAuth: boolean
  trySilentAuth?: boolean
  roles?: ReadonlyArray<RoleTypes>
  icon?: string
}

export type RouteTypes = {
  path: string
  navPath: string
  meta: RouteMetaTypes
}
