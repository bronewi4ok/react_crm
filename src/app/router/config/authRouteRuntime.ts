import { authRoutes } from '@/shared/config/router'
import type { ComponentType } from 'react'

type AuthRouteRuntimeItemTypes = {
  component: () => Promise<{ default: ComponentType }>
}

export const authRouteRuntime = {
  login: {
    component: () => import('@/pages/ui/auth/LoginPage'),
  },
  signup: {
    component: () => import('@/pages/ui/auth/SignUpPage'),
  },
  recover: {
    component: () => import('@/pages/ui/auth/RecoverPage'),
  },
  recoverSent: {
    component: () => import('@/pages/ui/auth/RecoverSentPage'),
  },
  recoverConfirm: {
    component: () => import('@/pages/ui/auth/RecoverConfirmPage'),
  },
} as const satisfies Record<keyof typeof authRoutes, AuthRouteRuntimeItemTypes>
