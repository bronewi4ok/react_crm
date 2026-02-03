import { ProjectsList, useGetProjectsQuery } from '@/entities/project'
import { ProjectsSortBar } from '@/features/projectsSortBar'
import { projectsSortSchema } from '@/features/projectsSortBar/'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { Button } from '@/shared/ui/baseUI/button'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { EmptyFallback } from '@/shared/ui/customUI/emptyFallback'
import { ErrorFallback } from '@/shared/ui/customUI/errorFallback'
import noProjectsImg from './no_projects.svg'

export const ProjectsWidget = () => {
  const [params, setParams] = useQueryParams(projectsSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(params)
  const projects = data?.data ?? []
  const meta = data?.meta
  const hasProjects = projects?.length > 0

  const handlePageChange = (page: number) => setParams({ page })

  if (isError)
    return <ErrorFallback error={{ message: 'Failed to load projects' }} onRetry={refetch} />

  if (isLoading)
    return (
      <Overlay full className="bg-amber-500">
        <Loader size="2xl" />
      </Overlay>
    )

  if (!hasProjects && !isFetching) {
    return (
      <EmptyFallback
        image={noProjectsImg}
        title="No projects found?"
        description="Create your first project to get started">
        <Button variant="primary">Add project</Button>
      </EmptyFallback>
    )
  }

  return (
    <>
      <ProjectsSortBar />
      <ProjectsList projects={projects} />
      {isFetching && !isLoading && (
        <Overlay full>
          <Loader />
        </Overlay>
      )}

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
