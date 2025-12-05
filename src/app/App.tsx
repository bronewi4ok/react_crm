import { router } from '@/app/router'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
