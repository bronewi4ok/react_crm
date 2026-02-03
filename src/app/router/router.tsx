import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { AuthLayout, MainLayout } from '@/widgets/layouts'
import { createBrowserRouter } from 'react-router-dom'
import { authRoutesChildren, mainRoutesChildren } from './routerChildren'
import { RouterLoader } from './RouterLoader'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <RouterLoader />,
    children: mainRoutesChildren,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <RouterLoader />,
    children: authRoutesChildren,
  },
])
