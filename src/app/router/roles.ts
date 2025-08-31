export const roles = {
  admin: 'admin',
  manager: 'manager',
  user: 'user',
  guest: 'guest',
} as const

export type Role = (typeof roles)[keyof typeof roles]
