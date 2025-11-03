import type { RoleTypes } from '@/shared/types'

export type User = {
  id: string
  role: RoleTypes
  email: string
  name: string
  avatar?: string
}
