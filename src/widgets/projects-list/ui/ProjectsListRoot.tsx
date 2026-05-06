import * as Sentry from '@sentry/react'
import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ProjectsListActionProvider, ProjectsListStateProvider } from '../model/context'
import { useProjectsList } from '../model/use-projects-list'
import { ProjectsListFallback } from './ProjectsListFallback'

// ======================================
type Props = { children: ReactNode }

// ======================================
const ProjectsListRoot = (props: Props) => {
  const { children } = props
  const { state, actions } = useProjectsList()

  const captureBoundaryError = (error: Error) => {
    Sentry.withScope((scope) => {
      scope.setTag('boundary', 'widget')
      scope.setTag('widget', 'ProjectsList')
      Sentry.captureException(error)
    })
  }

  return (
    <ErrorBoundary
      FallbackComponent={(props) => <ProjectsListFallback {...props} onRetry={actions.refetch} />}
      onError={(error) => captureBoundaryError(error)}>
      <ProjectsListStateProvider value={state}>
        <ProjectsListActionProvider value={actions}>{children}</ProjectsListActionProvider>
      </ProjectsListStateProvider>
    </ErrorBoundary>
  )
}

export { ProjectsListRoot }
