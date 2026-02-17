import * as Sentry from '@sentry/react'

let areGlobalListenersRegistered = false

export function initMonitoring() {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined
  if (!dsn) return

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    enabled: import.meta.env.PROD,
    tracesSampleRate: 0.1,
  })

  if (areGlobalListenersRegistered) return
  areGlobalListenersRegistered = true

  window.addEventListener('error', (event) => {
    if (!event.error) return
    Sentry.captureException(event.error)
  })

  window.addEventListener('unhandledrejection', (event) => {
    if (!event.reason) return
    Sentry.captureException(event.reason)
  })
}
