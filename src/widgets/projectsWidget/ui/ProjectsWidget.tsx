import { useGetProjectsQuery } from '@/entities/project'
import { projectsSortSchema } from '@/features/projectsSortBar/'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { ErrorFallback } from '@/shared/ui/customUI/errorFallback'
import * as Sentry from '@sentry/react'
import { ErrorBoundary } from 'react-error-boundary'
import { ProjectsWidgetContent } from './ProjectsWidgetContent'

export const ProjectsWidget = () => {
  const [params, , buildSearch] = useQueryParams(projectsSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(params)

  const projects = data?.data ?? []
  const meta = data?.meta
  const buildLink = (page: number) => buildSearch({ page })

  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <ErrorFallback
          title="Projects widget crashed"
          error={{ message: error?.message }}
          onRetry={() => {
            refetch()
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
      </
        projects={projects}
        meta={meta}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        refetch={refetch}
        buildLink={buildLink}
      />
    </ErrorBoundary>
  )
}
