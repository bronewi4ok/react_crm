import { store } from '@/app/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>{children}</Provider>
    </GoogleOAuthProvider>
  )
}
