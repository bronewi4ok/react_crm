import type { RouteAccessTypes } from '@/app/router/config/types'
import { mainRoutes } from '@/shared/config/router'
import { ROLES } from '@/shared/config/constants'
import type { ComponentType } from 'react'

type MainRouteRuntimeItemTypes = {
  access: RouteAccessTypes
  component: () => Promise<{ default: ComponentType }>
}

export const mainRouteRuntime = {
  home: {
    access: { requireAuth: true },
    component: () => import('@/pages/ui/HomePage'),
  },
  projects: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/ProjectsPage'),
  },
  projectDetails: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/ProjectDetailsPage'),
  },
  tasks: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/TasksPage'),
  },
  taskDetails: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/TasksDetailsPage'),
  },
  contacts: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/ContactsPage'),
  },
  products: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/ProductsPage'),
  },
  invoices: {
    access: { requireAuth: true, roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER] },
    component: () => import('@/pages/ui/InvoicesPage'),
  },
  notFound: {
    access: { requireAuth: false },
    component: () => import('@/pages/ui/Page404'),
  },
} as const satisfies Record<keyof typeof mainRoutes, MainRouteRuntimeItemTypes>
