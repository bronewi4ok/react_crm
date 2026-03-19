import { store } from '@/app/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <NuqsAdapter>
        <Provider store={store}>{children}</Provider>
      </NuqsAdapter>
    </GoogleOAuthProvider>
  )
}
