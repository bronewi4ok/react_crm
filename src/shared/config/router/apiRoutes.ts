export const apiRoutes = {
  baseUrl: import.meta.env.VITE_API_URL,
  auth: {
    signup: '/auth/signup',
    login: '/auth/login',
    googleLogin: '/auth/google',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    me: '/auth/me',
  },
} as const
