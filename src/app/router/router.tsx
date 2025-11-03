import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { Loading } from '@/shared/ui/loading'
import { AuthLayout, MainLayout } from '@/widgets/layouts'
import { createBrowserRouter } from 'react-router-dom'
import { authRoutesChildren, mainRoutesChildren } from './routerChildren'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: mainRoutesChildren,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: authRoutesChildren,
  },
])
