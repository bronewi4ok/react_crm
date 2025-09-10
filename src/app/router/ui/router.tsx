import { MainLayout } from '@/app/layouts'
import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import { appRouterRoutes } from '../model/appRouterRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    children: appRouterRoutes,
  },
])
