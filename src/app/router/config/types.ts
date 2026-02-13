import type { RoleTypes } from '@/shared/types'

export type RouteAccessTypes = {
  requireAuth: boolean
  roles?: RoleTypes[]
}
