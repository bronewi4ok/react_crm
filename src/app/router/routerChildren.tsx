import { checkAuthLoader } from '@/app/router/checkAuthLoader'
import {
  authRoutesList,
  mainRoutes,
  mainRoutesList,
} from '@/shared/config/router/'
import { Mutex } from 'async-mutex'
import type { RouteObject } from 'react-router-dom'

// Глобальний м'ютекс для запобігання конкурентним запитам оновлення
const refreshMutex = new Mutex()

// Лоадер для перевірки автентифікації та ролей користувача
const authLoader = checkAuthLoader({ refreshMutex })

// Роути для MainLayout
export const mainRoutesChildren = mainRoutesList
  .filter(
    (route) =>
      route.meta.requireAuth || route.path === mainRoutes.notFound.path,
  )
  .map((route) => ({
    path: route.path,
    handle: { meta: route.meta },
    loader: route.meta.requireAuth ? () => authLoader(route) : undefined,
    lazy: async () => ({ Component: (await route.component()).default }),
  }))

// Роути для AuthLayout
export const authRoutesChildren: RouteObject[] = authRoutesList.map(
  (route) => ({
    path: route.path,
    handle: { meta: route.meta },
    lazy: async () => ({ Component: (await route.component()).default }),
  }),
)
