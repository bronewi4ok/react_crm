import { type RouteTypes } from './types'

export const ROLES = Object.freeze({
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  GUEST: 'guest',
} as const)

export const routes = {
  home: {
    path: '/',
    component: () => import('@/pages/ui/HomePage'),
    meta: {
      title: 'Dashboard',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-dashboard',
    },
  },

  projects: {
    path: '/projects',
    meta: {
      title: 'Projects',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-projects',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/ProjectsPage'),
  },

  projectDetails: {
    path: `/projects/:id`,
    meta: {
      title: 'Project Details',
      isInMenu: false,
      requireAuth: false,
      icon: 'menu-projects',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/ProjectDetailsPage'),
  },

  tasks: {
    path: '/tasks',
    meta: {
      title: 'Tasks',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-tasks',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/TasksPage'),
  },

  contacts: {
    path: '/contacts',
    meta: {
      title: 'Contacts',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-contacts',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/ContactsPage'),
  },

  products: {
    path: '/products',
    meta: {
      title: 'Products',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-products',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/ProductsPage'),
  },

  invoices: {
    path: '/invoices',
    meta: {
      title: 'Invoices',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-invoices',
      // roles: [roles.admin],
    },
    component: () => import('@/pages/ui/InvoicesPage'),
  },

  notFound: {
    path: '*',
    meta: { title: 'Not found', isInMenu: false, requireAuth: false },
    component: () => import('@/pages/ui/Page404'),
  },
} as const satisfies Record<string, RouteTypes>

export type PageKey = keyof typeof routes

// path: (id: string) => `/projects/${id}`,
