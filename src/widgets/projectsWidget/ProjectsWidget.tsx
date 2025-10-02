import { ProjectsList, useGetProjectsQuery } from '@/entities/project'
import {
  ProjectsSortBar,
  useProjectsQueryParams,
} from '@/features/projectsSortBar'
import { Button } from '@/shared/ui/button'
import { EmptyFallback } from '@/shared/ui/emptyFallback'
import { ErrorFallback } from '@/shared/ui/errorFallback'
import { Pagination } from '@/shared/ui/pagination'
import noProjectsImg from './no_projects.svg'

export function ProjectsWidget() {
  const { sortParams, setSortParams } = useProjectsQueryParams()
  const { data, isLoading, isError, isFetching, refetch } =
    useGetProjectsQuery(sortParams)

  if (isError) {
    return (
      <ErrorFallback
        error={{ message: 'Failed to load projects' }}
        onRetry={refetch}
      />
    )
  }

  if (isLoading) {
    return <div className="p-4 text-support-700">Loading projects...</div>
  }

  const projects = data?.data ?? []
  const meta = data?.meta
  const hasProjects = projects.length > 0

  if (!hasProjects) {
    return (
      <EmptyFallback
        image={noProjectsImg}
        title="No projects found?"
        description="Create your first project to get started">
        <Button variant="primary">Add project</Button>
      </EmptyFallback>
    )
  }

  const handlePageChange = (page: number) => {
    setSortParams({ page })
  }

  return (
    <>
      <ProjectsSortBar />
      <ProjectsList projects={projects} />
      {meta && meta.totalPages > 1 && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={handlePageChange}
          isLoading={isLoading}
          isFetching={isFetching}
          showStatus={true}
        />
      )}
    </>
  )
}
