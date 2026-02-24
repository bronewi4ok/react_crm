import * as Sentry from '@sentry/react'
import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { NoProjectsImg } from '..'
import { ProjectsWidgetActionProvider, ProjectsWidgetStateProvider } from '../model/context'
import { useProjectsWidget } from '../model/useProjectsWidget'
import { ProjectsWidgetFallback } from './ProjectsWidgetFallback'

export type ProjectsWidgetRootProps = PropsWithChildren

export const ProjectsWidgetRoot = ({ children }: ProjectsWidgetRootProps) => {
  const { state, actions } = useProjectsWidget()

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => (
        <ProjectsWidgetFallback
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
          scope.setTag('widget', 'ProjectsWidget')
          Sentry.captureException(error)
        })
      }}>
      <ProjectsWidgetStateProvider value={{ ...state }}>
        <ProjectsWidgetActionProvider value={{ ...actions }}>
          {children}
        </ProjectsWidgetActionProvider>
      </ProjectsWidgetStateProvider>
    </ErrorBoundary>
  )
}
