export const apiRoutes = {
  baseUrl: import.meta.env.VITE_API_URL,
  auth: {
    signup: '/auth/signup',
    login: '/auth/login',
    googleLogin: '/auth/google',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    recover: '/auth/recover',
    recoverRequest: '/auth/recover/request',
    recoverSent: '/auth/recover/sent',
    recoverConfirm: '/auth/recover/confirm',
    me: '/auth/me',
  },
} as const
