// import { roles } from './roles'
import type { RouteConfig } from './routesConfig'

export const frontRoutes = {
  pages: {
    HomePage: {
      path: '',
      meta: { title: 'Home', isInMenu: true, requireAuth: false },
      component: () => import('@/pages/HomePage'),
    },

    ProductsPage: {
      path: 'products',
      meta: {
        title: 'Products',
        isInMenu: true,
        requireAuth: true,
        // roles: [roles.admin],
      },
      component: () => import('@/pages/ProductsPage'),
    },

    Page404: {
      path: '*',
      meta: { title: 'Not Found', isInMenu: false, requireAuth: false },
      component: () => import('@/pages/Page404'),
    },
  },
} as const satisfies { pages: Record<string, RouteConfig> }

export type PageKey = keyof typeof frontRoutes.pages

// path: (id: string) => `/products/${id}`
// navigate(frontRoutes.pages.ProductDetailsPage.path(id))
