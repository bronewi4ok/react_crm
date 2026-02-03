import { ROLES } from '../constants'

export const mainRoutes = {
  home: {
    path: '',
    navPath: '/',
    component: () => import('@/pages/ui/HomePage'),
    meta: {
      title: 'Dashboard',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-dashboard',
    },
  },

  projects: {
    path: 'projects',
    navPath: '/projects',
    component: () => import('@/pages/ui/ProjectsPage'),
    meta: {
      title: 'Projects',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-projects',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  projectDetails: {
    path: 'projects/:id',
    navPath: '/projects/:id',
    component: () => import('@/pages/ui/ProjectDetailsPage'),
    meta: {
      title: 'Project Details',
      isInMenu: false,
      requireAuth: true,
      icon: 'common-projects',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  tasks: {
    path: 'tasks',
    navPath: '/tasks',
    component: () => import('@/pages/ui/TasksPage'),
    meta: {
      title: 'Tasks',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-tasks',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  taskDetails: {
    path: 'tasks/:id',
    navPath: '/tasks/:id',
    component: () => import('@/pages/ui/TasksDetailsPage'),
    meta: {
      title: 'Tasks Details',
      isInMenu: false,
      requireAuth: true,
      icon: 'common-tasks',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },
  contacts: {
    path: 'contacts',
    navPath: '/contacts',
    component: () => import('@/pages/ui/ContactsPage'),
    meta: {
      title: 'Contacts',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-contacts',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  products: {
    path: 'products',
    navPath: '/products',
    component: () => import('@/pages/ui/ProductsPage'),
    meta: {
      title: 'Products',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-products',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  invoices: {
    path: 'invoices',
    navPath: '/invoices',
    component: () => import('@/pages/ui/InvoicesPage'),
    meta: {
      title: 'Invoices',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-invoices',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  notFound: {
    path: '*',
    navPath: '*',
    component: () => import('@/pages/ui/Page404'),
    meta: { title: 'Not found', isInMenu: false, requireAuth: false },
  },
} as const

// generatePath(mainRoutes.projectDetails.navPath, { id: item.id })
