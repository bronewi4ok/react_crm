import { ProjectFallback } from '@entities/project/ui/ProjectFallback'
import { Button } from '@ui/base/button'
import type { FallbackProps } from 'react-error-boundary'

// ======================================
type Props = {
  onRetry: () => unknown
} & FallbackProps

// ======================================
export const ProjectsListFallback = ({ resetErrorBoundary, onRetry }: Props) => {
  const handleRetry = () => {
    onRetry()
    resetErrorBoundary()
  }

  return <ProjectFallback actions={<Button onClick={handleRetry}>Retry</Button>} />
}
