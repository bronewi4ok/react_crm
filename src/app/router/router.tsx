import { MainLayout } from '@/app/layouts'
import GlobalErrorPage from '@/pages/GlobalErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import { appRouterRoutes } from './appRouterRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    children: appRouterRoutes,
  },
])
