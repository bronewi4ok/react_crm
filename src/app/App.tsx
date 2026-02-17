import * as Sentry from '@sentry/react'
import { ErrorBoundary } from 'react-error-boundary'
import { MonitoringFallback } from './init'
import { AppProvider } from './provider'
import { AppRouter } from './router'

export const App = () => {
  // всередині App.tsx
  return (
    <AppProvider>
      <ErrorBoundary
        FallbackComponent={MonitoringFallback}
        onError={(error, info) => {
          // 1) Репорт в Sentry
          Sentry.withScope((scope) => {
            scope.setTag('boundary', 'global')
            scope.setContext('react', { componentStack: info.componentStack })
            Sentry.captureException(error)
          })

          // 2) (опційно) console.error в DEV
          if (import.meta.env.DEV) console.error(error)
        }}>
        <AppRouter />
      </ErrorBoundary>
    </AppProvider>
  )
}
