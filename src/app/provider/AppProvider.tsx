import { store } from '@/app/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <NuqsAdapter>
        <Provider store={store}>{children}</Provider>

        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                'bg-slate-900 text-white border border-slate-800 rounded-xl shadow-lg p-4 flex items-center gap-3 w-full',
              description: 'text-slate-400 text-sm',
              actionButton:
                'bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors',
              cancelButton: 'bg-slate-700 text-white px-3 py-1.5 rounded-md',
            },
          }}
        />
      </NuqsAdapter>
    </GoogleOAuthProvider>
  )
}
