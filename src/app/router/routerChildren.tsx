import { frontRoutes, type RouteTypes } from '@shared/routes'
import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'
import { checkAuthLoader } from './checkAuthLoader'

const pages = import.meta.glob<ComponentType>(
  ['/src/pages/**/*.tsx', '!/src/pages/ui/GlobalErrorPage.tsx'],
  { import: 'default' },
)

const getImportByKey = (pageKey: string) => {
  const entry = Object.entries(pages).find(([path]) => path.endsWith(`/${pageKey}.tsx`))
  if (!entry) throw new Error(`Page file not found: ${pageKey}`)
  return entry[1]
}

function makeRoute(route: RouteTypes, pageKey: string): RouteObject {
  const importPage = getImportByKey(pageKey)

  return {
    path: route.path,
    handle: { meta: route.meta },
    loader: checkAuthLoader(route),
    lazy: async () => ({ Component: await importPage() }),
  }
}

export const mainRouterChildren: RouteObject[] = Object.entries(frontRoutes.main).map(
  ([key, route]) => makeRoute(route, key),
)

export const authRouterChildren: RouteObject[] = Object.entries(frontRoutes.auth).map(
  ([key, route]) => makeRoute(route, key),
)
