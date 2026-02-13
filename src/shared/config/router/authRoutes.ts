export const authRoutes = {
  login: {
    path: 'login',
    navPath: '/auth/login',
    meta: { title: 'Login', isInMenu: false },
  },

  signup: {
    path: 'signup',
    navPath: '/auth/signup',
    meta: { title: 'Sign Up', isInMenu: false },
  },

  recover: {
    path: 'recover',
    navPath: '/auth/recover',
    meta: { title: 'Recover request', isInMenu: false },
  },

  recoverSent: {
    path: 'recover/sent',
    navPath: '/auth/recover/sent',
    meta: { title: 'Recover request', isInMenu: false },
  },

  recoverConfirm: {
    path: 'recover/confirm',
    navPath: '/auth/recover/confirm',
    meta: { title: 'Recover request', isInMenu: false },
  },

  // notFound: { path: '*', loader: () => redirect('/auth/login') },
} as const
