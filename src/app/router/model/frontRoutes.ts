import { type frontRouteTypes } from './frontRoutes.types'

export const frontRoutes = {
  pages: {
    HomePage: {
      path: '/',
      meta: {
        title: 'Dashboard',
        isInMenu: true,
        requireAuth: false,
        icon: 'menu-dashboard',
      },
      component: () => import('@/pages/ui/HomePage'),
    },

    ProjectsPage: {
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

    TasksPage: {
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

    ContactsPage: {
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

    ProductsPage: {
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

    InvoicesPage: {
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

    Page404: {
      path: '*',
      meta: { title: 'Not Found', isInMenu: false, requireAuth: false },
      component: () => import('@/pages/ui/Page404'),
    },
  },
} as const satisfies { pages: Record<string, frontRouteTypes> }

export type PageKey = keyof typeof frontRoutes.pages

// path: (id: string) => `/products/${id}`
// navigate(frontRoutes.pages.ProductDetailsPage.path(id))
