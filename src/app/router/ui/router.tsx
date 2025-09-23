import GlobalErrorPage from '@/pages/ui/GlobalErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { routerChildren } from './routerChildern'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <GlobalErrorPage />,
    children: routerChildren,
  },
])
