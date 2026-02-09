import { ProjectCard, useGetProjectsQuery } from '@/entities/project'
import { ProjectsSortBar } from '@/features/projectsSortBar'
import { projectsSortSchema } from '@/features/projectsSortBar/'
import { mainRoutes } from '@/shared/config/router'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { EmptyFallback } from '@/shared/ui/customUI/emptyFallback'
import { ErrorFallback } from '@/shared/ui/customUI/errorFallback'
import { MainList } from '@/shared/ui/customUI/mainList'
import { generatePath } from 'react-router-dom'
import noProjectsImg from './no_projects.svg'

export const ProjectsWidget = () => {
  const [params, buildSearch] = useQueryParams(projectsSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(params)
  const projects = data?.data ?? []
  const meta = data?.meta
  const hasProjects = projects?.length > 0

  // const handlePageChange = (page: number) => setParams({ page })
  const buildLink = (page: number) => buildSearch({ page })

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
      {/* PROJECT SORTBAR */}
      <ProjectsSortBar />

      {/* PROJECT LIST  */}
      <MainList className="h-full flex-1">
        {projects.map((project) => (
          <MainList.Item key={project.id}>
            <ProjectCard
              project={project}
              to={generatePath(mainRoutes.projectDetails.navPath, { id: project.id })}
            />
          </MainList.Item>
        ))}
      </MainList>

      {/* PAGINATION */}
      {meta && meta.totalPages > 1 && (
        <Pagination
          className="relative"
          currentPage={meta.page}
          totalPages={meta.totalPages}
          buildLink={buildLink}
          disabled={isFetching}>
          <Pagination.Start>
            <Icon size="md" name="common-arrowLeft" /> Prev
          </Pagination.Start>

          <Pagination.Pages />

          <Pagination.End>
            Next
            <Icon size="md" name="common-arrowRight" />
          </Pagination.End>

          {isFetching && !isLoading && (
            <Overlay className="absolute h-full w-full">
              <Loader />
            </Overlay>
          )}
        </Pagination>
      )}
    </>
  )
}
