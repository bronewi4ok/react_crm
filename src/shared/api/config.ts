export const API_TAGS = {
  USER: 'User',
  PROJECT: 'Project',
  TASK: 'Task',
} as const

export const API_LIST = 'LIST'
export type ApiTagTypes = (typeof API_TAGS)[keyof typeof API_TAGS]

export const API_ROUTES = {
  BASE_URL: import.meta.env.VITE_API_URL,

  // Auth
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  OAUTH: '/auth/google',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  RECOVER: '/auth/recover',
  RECOVER_REQUEST: '/auth/recover/request',
  RECOVER_SENT: '/auth/recover/sent',
  RECOVER_CONFIRM: '/auth/recover/confirm',
  ME: '/auth/me',

  // Main
  PROJECTS: {
    LIST: 'projects',
    ITEM: (id: string) => `projects/${id}`,
  },
  TASKS: {
    LIST: 'tasks',
    ITEM: (id: string) => `tasks/${id}`,
  },
} as const
