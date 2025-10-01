import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { Loading } from '@/shared/ui/loading'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { routerChildren } from './routerChildren'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: routerChildren,
  },
])
