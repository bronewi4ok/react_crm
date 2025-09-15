import type { PageTypes } from '@/pages/model/types'
import type { Role } from './roles'

export type RouteMeta = {
  title: string
  isInMenu: boolean
  requireAuth: boolean
  roles?: Role[]
  icon?: string
}

export type frontRouteTypes = {
  path: string | ((...args: string[]) => string)
  meta: RouteMeta
  component: () => Promise<{ default: PageTypes }>
}
