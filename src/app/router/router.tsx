import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { Loader } from '@/shared/ui/baseUI/loader'
import { AuthLayout, MainLayout } from '@/widgets/layouts'
import { createBrowserRouter } from 'react-router-dom'
import { authRoutesChildren, mainRoutesChildren } from './routerChildren'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: mainRoutesChildren,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: authRoutesChildren,
  },
])
