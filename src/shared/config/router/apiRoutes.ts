export const apiRoutes = {
  baseUrl: import.meta.env.VITE_API_URL,
  auth: {
    signup: '/auth/signup',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    me: '/auth/me',
  },
} as const
