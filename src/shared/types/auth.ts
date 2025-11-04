import type { User } from '@/shared/types/user'

export type LoginCredentials = { email: string; password: string }
export type SignupCredentials = LoginCredentials & { name: string }
export type GoogleCredentials = { token: string }
export type accessTokenType = string | null
export type AuthResponse = { user: User; accessToken: accessTokenType }
