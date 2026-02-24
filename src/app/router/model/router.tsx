import { AppInit } from '@/app/init'
import GlobalErrorPage from '@/pages/ui/main/GlobalErrorPage'
import { AuthLayout, MainLayout } from '@/widgets/layouts'
import { createBrowserRouter } from 'react-router-dom'
import { RouterLoader } from '../ui/RouterLoader'
import { authRouterChildren, mainRouterChildren } from './routerChildren'

export const router = createBrowserRouter([
  {
    element: <AppInit />,
    errorElement: <GlobalErrorPage />,
    children: [
      {
        path: '/',
        Component: MainLayout,
        hydrateFallbackElement: <RouterLoader />,
        children: mainRouterChildren,
      },
      {
        path: '/auth',
        Component: AuthLayout,
        hydrateFallbackElement: <RouterLoader />,
        children: authRouterChildren,
      },
    ],
  },
])
