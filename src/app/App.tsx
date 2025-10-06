import { router } from '@/app/router'
import { useAppSelector } from '@/app/store'
import { Loading } from '@/shared/ui/loading'
import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

export function App() {
  const currentTheme = useAppSelector((state) => state.theme.current)

  // ✅ Застосовуємо тему з оптимізацією переходів
  useEffect(() => {
    // Тимчасово відключаємо transitions для початкової ініціалізації
    const isInitialLoad = !document.documentElement.dataset.theme

    if (isInitialLoad) {
      document.documentElement.classList.add('no-transition')
    }

    document.documentElement.dataset.theme = currentTheme

    // Включаємо transitions після ініціалізації
    if (isInitialLoad) {
      // Використовуємо requestAnimationFrame для синхронізації з рендером
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('no-transition')
        })
      })
    }
  }, [currentTheme])

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
