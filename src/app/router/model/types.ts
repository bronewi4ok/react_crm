import type { PageTypes } from '@/pages/model/types'
import type { ROLES } from './configs'

export type RoleTypes = (typeof ROLES)[keyof typeof ROLES]

export type RouteMetaTypes = {
  title: string
  isInMenu: boolean
  requireAuth: boolean
  roles?: RoleTypes[]
  icon?: string
}

export type RouteHandleTypes = { meta: RouteMetaTypes }

export type RouteTypes = {
  // navPath?: (...args: string[]) => string
  path: string
  meta: RouteMetaTypes
  component: () => Promise<{ default: PageTypes }>
}
