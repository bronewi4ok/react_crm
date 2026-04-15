import '@/app/styles/styles.css'
import * as Sentry from '@sentry/react'
import { ErrorBoundary } from 'react-error-boundary'
import { MonitoringFallback } from './init'
import { AppProvider } from './provider'
import { AppRouter } from './router'

import 'virtual:svg-icons-register'

export const App = () => {
  return (
    <AppProvider>
      <ErrorBoundary
        FallbackComponent={MonitoringFallback}
        onError={(error, info) => {
          Sentry.withScope((scope) => {
            scope.setTag('boundary', 'global')
            scope.setContext('react', { componentStack: info.componentStack })
            Sentry.captureException(error)
          })

          if (import.meta.env.DEV) console.error(error)
        }}>
        <AppRouter />
      </ErrorBoundary>
    </AppProvider>
  )
}
