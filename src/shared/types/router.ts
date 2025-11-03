import type { PageTypes } from '@/pages/model/types'
import type { ROLES } from '@/shared/config/constants'

export type RoleTypes = (typeof ROLES)[keyof typeof ROLES]

export type RouteMetaTypes = {
  title: string
  isInMenu: boolean
  requireAuth: boolean
  roles?: RoleTypes[]
  icon?: string
}

export type RouteTypes = {
  path: string
  meta: RouteMetaTypes
  component: () => Promise<{ default: PageTypes }>
}
