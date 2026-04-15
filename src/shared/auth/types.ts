import type { ROLES } from '../config/roles'

export type RoleTypes = (typeof ROLES)[keyof typeof ROLES]

export type User = {
  id: string
  role: RoleTypes
  email: string
  name: string
  avatar?: string
}

export type RecoverTypes = { email: string }
export type RecoverConfirmTypes = {
  token: string
  newPassword: string
  confirmNewPassword?: string
}
export type LoginCredentialsTypes = RecoverTypes & { password: string }
export type SignupCredentialsTypes = LoginCredentialsTypes & { name: string }
export type AccessTokenTypes = string | null
export type AuthResponseTypes = { user: User; accessToken: AccessTokenTypes }
export type AccessTokenStateTypes = { auth: { accessToken: AccessTokenTypes } }
