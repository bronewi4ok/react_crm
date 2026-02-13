export const mainRoutes = {
  home: {
    path: '',
    navPath: '/',
    meta: {
      title: 'Dashboard',
      isInMenu: true,
      icon: 'common-dashboard',
    },
  },

  projects: {
    path: 'projects',
    navPath: '/projects',
    meta: {
      title: 'Projects',
      isInMenu: true,
      icon: 'common-projects',
    },
  },

  projectDetails: {
    path: 'projects/:id',
    navPath: '/projects/:id',
    meta: {
      title: 'Project Details',
      isInMenu: false,
      icon: 'common-projects',
    },
  },

  tasks: {
    path: 'tasks',
    navPath: '/tasks',
    meta: {
      title: 'Tasks',
      isInMenu: true,
      icon: 'common-tasks',
    },
  },

  taskDetails: {
    path: 'tasks/:id',
    navPath: '/tasks/:id',
    meta: {
      title: 'Tasks Details',
      isInMenu: false,
      icon: 'common-tasks',
    },
  },
  contacts: {
    path: 'contacts',
    navPath: '/contacts',
    meta: {
      title: 'Contacts',
      isInMenu: true,
      icon: 'common-contacts',
    },
  },

  products: {
    path: 'products',
    navPath: '/products',
    meta: {
      title: 'Products',
      isInMenu: true,
      icon: 'common-products',
    },
  },

  invoices: {
    path: 'invoices',
    navPath: '/invoices',
    meta: {
      title: 'Invoices',
      isInMenu: true,
      icon: 'common-invoices',
    },
  },

  notFound: {
    path: '*',
    navPath: '*',
    meta: { title: 'Not found', isInMenu: false },
  },
} as const

// generatePath(mainRoutes.projectDetails.navPath, { id: item.id })

// navPath: (id?: string) => generatePath(frontRoutes.ProductEditPage.path, { id }),
// Виклик: navigate(frontRoutes.ProductEditPage.navPath())

// 
// function makeRoute<P extends Record<string, any>>(path: string) {
//   return {
//     path,
//     navPath: (params: P) => generatePath(path, params),
//   }
// }

// export const frontRoutes = {
//   ProductEditPage: makeRoute<{ id?: string }>('/products/edit/:id?'),
// }
