import { router } from '@/app/router'
import { useAppSelector } from '@/app/store'
import { Loading } from '@/shared/ui/loading'
import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

export function App() {
  const currentTheme = useAppSelector((state) => state.theme.current)

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
  }, [currentTheme])

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
