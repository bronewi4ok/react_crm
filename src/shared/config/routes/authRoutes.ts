export const authRoutes = {
  LoginPage: {
    path: 'login',
    navPath: '/auth/login',
    meta: { title: 'Login', isInMenu: false, requireAuth: false },
  },

  SignUpPage: {
    path: 'signup',
    navPath: '/auth/signup',
    meta: { title: 'Sign Up', isInMenu: false, requireAuth: false },
  },

  RecoverPage: {
    path: 'recover',
    navPath: '/auth/recover',
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  RecoverSentPage: {
    path: 'recover/sent',
    navPath: '/auth/recover/sent',
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  RecoverConfirmPage: {
    path: 'recover/confirm',
    navPath: '/auth/recover/confirm',
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  // notFound: { path: '*', loader: () => redirect('/auth/login') },
} as const
