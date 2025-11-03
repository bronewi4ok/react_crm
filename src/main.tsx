import '@/index.css'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'virtual:svg-icons-register'
import { AppInit } from './app/init/AppInit'
import { router } from './app/router'
import { store } from './app/store/store'
import { Loading } from './shared/ui/loading'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppInit />

    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>,
)
