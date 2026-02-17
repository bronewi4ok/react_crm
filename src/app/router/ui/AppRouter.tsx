import { RouterProvider } from 'react-router-dom'
import { router } from '../model/router'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
