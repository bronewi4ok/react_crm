import { PATHS } from './constants'
import { type RouteTypes } from './types'

export const routes = {
  home: {
    path: PATHS.HOME,
    component: () => import('@/pages/ui/HomePage'),
    meta: {
      title: 'Dashboard',
      isInMenu: true,
      requireAuth: false,
      icon: 'menu-dashboard',
    },
  },

  projects: {
    path: PATHS.PROJECTS,
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
    path: PATHS.PROJECT_DETAILS,
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
    path: PATHS.TASKS,
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
    path: PATHS.CONTACTS,
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
    path: PATHS.PRODUCTS,
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
    path: PATHS.INVOICES,
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
