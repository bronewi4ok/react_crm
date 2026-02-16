import { ROLES } from '../constants'

export const mainRoutes = {
  HomePage: {
    path: '',
    navPath: '/',
    meta: {
      title: 'Dashboard',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-dashboard',
    },
  },

  ProjectsPage: {
    path: 'projects',
    navPath: '/projects',
    meta: {
      title: 'Projects',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-projects',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  ProjectDetailsPage: {
    path: 'projects/:id',
    navPath: '/projects/:id',
    meta: {
      title: 'Project Details',
      isInMenu: false,
      requireAuth: true,
      icon: 'common-projects',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  TasksPage: {
    path: 'tasks',
    navPath: '/tasks',
    meta: {
      title: 'Tasks',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-tasks',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  TasksDetailsPage: {
    path: 'tasks/:id',
    navPath: '/tasks/:id',
    meta: {
      title: 'Tasks Details',
      isInMenu: false,
      requireAuth: true,
      icon: 'common-tasks',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },
  ContactsPage: {
    path: 'contacts',
    navPath: '/contacts',
    meta: {
      title: 'Contacts',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-contacts',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  ProductsPage: {
    path: 'products',
    navPath: '/products',
    meta: {
      title: 'Products',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-products',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  InvoicesPage: {
    path: 'invoices',
    navPath: '/invoices',
    meta: {
      title: 'Invoices',
      isInMenu: true,
      requireAuth: true,
      icon: 'common-invoices',
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
    },
  },

  Page404: {
    path: '*',
    navPath: '*',
    meta: { title: 'Not found', isInMenu: false, requireAuth: false },
  },
} as const

// generatePath(mainRoutes.ProjectDetailsPage.navPath, { id: item.id })

