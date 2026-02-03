import '@/style.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'virtual:svg-icons-register'
import { AppInit } from './app/init/AppInit'
import { AppLoader } from './app/init/AppLoader'
import { router } from './app/router'
import { store } from './app/store/store'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <AppInit />

      <Suspense fallback={<AppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </GoogleOAuthProvider>,
)
