import '@/app/styles/styles.css'
import * as Sentry from '@sentry/react'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { ErrorBoundary } from 'react-error-boundary'
import 'virtual:svg-icons-register'
import { MonitoringFallback } from './init'
import { AppProvider } from './provider'
import { AppRouter } from './router'

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
        <NuqsAdapter>
          <AppRouter />
        </NuqsAdapter>
      </ErrorBoundary>
    </AppProvider>
  )
}
