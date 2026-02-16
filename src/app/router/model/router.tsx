import GlobalErrorPage from '@/pages/ui/main/GlobalErrorPage'
import { AuthLayout, MainLayout } from '@/widgets/layouts'
import { createBrowserRouter } from 'react-router-dom'
import { RouterLoader } from '../ui/RouterLoader'
import { authRouterChildren, mainRouterChildren } from './routerChildren'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <RouterLoader />,
    children: mainRouterChildren,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <RouterLoader />,
    children: authRouterChildren,
  },
])
