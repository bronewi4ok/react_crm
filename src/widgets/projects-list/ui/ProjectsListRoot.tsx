import * as Sentry from '@sentry/react'
import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { NoProjectsImg } from '..'
import { ProjectsListActionProvider, ProjectsListStateProvider } from '../model/context'
import { useProjectsList } from '../model/use-projects-list'
import { ProjectsListFallback } from './ProjectsListFallback'

export const ProjectsListRoot = ({ children }: PropsWithChildren) => {
  const { state, actions } = useProjectsList()

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => (
        <ProjectsListFallback
          image={NoProjectsImg}
          title="Projects view failed to render"
          text="Something went wrong! Please try again."
          onRetry={() => {
            actions.refetch()
            resetErrorBoundary()
          }}
        />
      )}
      onError={(error) => {
        Sentry.withScope((scope) => {
          scope.setTag('boundary', 'widget')
          scope.setTag('widget', 'ProjectsList')
          Sentry.captureException(error)
        })
      }}>
      <ProjectsListStateProvider value={state}>
        <ProjectsListActionProvider value={actions}>{children}</ProjectsListActionProvider>
      </ProjectsListStateProvider>
    </ErrorBoundary>
  )
}
