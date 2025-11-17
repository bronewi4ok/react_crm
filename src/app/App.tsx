import { router } from '@/app/router'
import { Loading } from '@/shared/ui/baseUI/loading'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
