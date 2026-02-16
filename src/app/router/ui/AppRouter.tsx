import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../model/router'
import { RouterLoader } from './RouterLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<RouterLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
