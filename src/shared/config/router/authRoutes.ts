export const authRoutes = {
  login: {
    path: 'login',
    navPath: '/auth/login',
    component: () => import('@/pages/ui/auth/LoginPage'),
    meta: { title: 'Login', isInMenu: false, requireAuth: false },
  },

  signup: {
    path: 'signup',
    navPath: '/auth/signup',
    component: () => import('@/pages/ui/auth/SignUpPage'),
    meta: { title: 'Sign Up', isInMenu: false, requireAuth: false },
  },

  recover: {
    path: 'recover',
    navPath: '/auth/recover',
    component: () => import('@/pages/ui/auth/RecoverPage'),
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  recoverSent: {
    path: 'recover/confirm',
    navPath: '/auth/recover/sent',
    component: () => import('@/pages/ui/auth/RecoverSentPage'),
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  recoverConfirm: {
    path: 'recover/confirm',
    navPath: '/auth/recover/confirm',
    component: () => import('@/pages/ui/auth/RecoverConfirmPage'),
    meta: { title: 'Recover request', isInMenu: false, requireAuth: false },
  },

  // notFound: { path: '*', loader: () => redirect('/auth/login') },
} as const
