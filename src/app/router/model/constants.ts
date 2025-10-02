export const ROLES = Object.freeze({
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  GUEST: 'guest',
} as const)

export const PATHS = Object.freeze({
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAILS: '/projects/:id',
  TASKS: '/tasks',
  CONTACTS: '/contacts',
  PRODUCTS: '/products',
  INVOICES: '/invoices',
  NOT_FOUND: '*',
} as const)
