import { frontRoutes } from '@/shared/config/routes'
import { refreshMutex } from '@/shared/lib/refreshMutex'
import type { RouteTypes } from '@/shared/types'
import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'
import { checkAuthLoader } from '../model/checkAuthLoader'

const authLoader = checkAuthLoader({ refreshMutex })
const pages = import.meta.glob<ComponentType>('/src/pages/**/*.tsx', { import: 'default' })

const getImportByKey = (pageKey: string) => {
  const entry = Object.entries(pages).find(([path]) => path.endsWith(`/${pageKey}.tsx`))
  if (!entry) throw new Error(`Page file not found: ${pageKey}`)
  return entry[1]
}

// ==

// Видаляємо аргумент requireAuth, бо він більше не потрібен для вибору лоадера
function makeRoute(route: RouteTypes, pageKey: string): RouteObject {
  const importPage = getImportByKey(pageKey)

  return {
    path: route.path,
    handle: { meta: route.meta },
    // Лоадер тепер призначається ЗАВЖДИ
    loader: authLoader(route),
    lazy: async () => ({ Component: await importPage() }),
  }
}

// Оновлюємо мапінг (прибираємо передачу третього аргументу)
export const mainRouterChildren: RouteObject[] = Object.entries(frontRoutes.main).map(
  ([key, route]) => makeRoute(route, key),
)

export const authRouterChildren: RouteObject[] = Object.entries(frontRoutes.auth).map(
  ([key, route]) => makeRoute(route, key),
)
