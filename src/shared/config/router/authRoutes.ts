// import { redirect } from 'react-router-dom'

export const authRoutes = {
  login: {
    path: 'login',
    navPath: '/auth/login',
    component: () => import('@/pages/ui/LoginPage'),
    meta: { title: 'Login', isInMenu: false, requireAuth: false },
  },

  signup: {
    path: 'signup',
    navPath: '/auth/signup',
    component: () => import('@/pages/ui/SignUpPage'),
    meta: { title: 'Sign Up', isInMenu: false, requireAuth: false },
  },

  // notFound: { path: '*', loader: () => redirect('/auth/login') },
} as const
