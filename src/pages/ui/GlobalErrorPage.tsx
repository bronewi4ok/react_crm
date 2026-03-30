import { Wrap } from '@/shared/ui/customUI/wrap'
import * as Sentry from '@sentry/react'
import { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

const GlobalErrorPage = () => {
  const routeError = useRouteError()

  useEffect(() => {
    if (!routeError) return

    Sentry.withScope((scope) => {
      scope.setTag('boundary', 'router')
      Sentry.captureException(routeError)
    })
  }, [routeError])

  return (
    <Wrap>
      <div className="flex h-dvh w-full items-center justify-center">
        <h1>GlobalErrorPage</h1>
      </div>
    </Wrap>
  )
}
export default GlobalErrorPage
