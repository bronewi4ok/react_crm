import type { ROLES } from '@/shared/config/constants'

export type RoleTypes = (typeof ROLES)[keyof typeof ROLES]

export type RouteMetaTypes = {
  title: string
  isInMenu: boolean
  icon?: string
}

export type RouteTypes = {
  path: string
  navPath: string
  meta: RouteMetaTypes
}
