import { Button } from '@/shared/ui/baseUI/button'
import type { ErrorFallbackTypes } from './types'

export const ErrorFallback = ({
  error,
  onRetry,
  title = 'Something went wrong',
  description,
}: ErrorFallbackTypes) => {
  const getErrorMessage = () => {
    if (description) return description

    const status = error?.status
    if (status === 404) return 'The resource was not found'
    if (status && status >= 500) return 'Server error occurred'
    if (status === 0) return 'Network connection failed'

    return 'Failed to load data. Please try again.'
  }

  return (
    <div className="p-8 text-center">
      <div className="mb-4">
        <div className="mb-4 text-6xl">⚠️</div>
        <h2 className="text-dark mb-2 text-xl font-medium">{title}</h2>
        <p className="text-support-700">{getErrorMessage()}</p>
      </div>

      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  )
}
