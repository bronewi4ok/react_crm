import type { User } from '@/shared/types/user'
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

// export type GoogleCredentials = { token: string }
