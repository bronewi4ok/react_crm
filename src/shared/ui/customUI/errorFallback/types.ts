export type ErrorFallbackTypes = {
  error?: { status?: number; message?: string }
  onRetry?: () => void
  title?: string
  description?: string
}
