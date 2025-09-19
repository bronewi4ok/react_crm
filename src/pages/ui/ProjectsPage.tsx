import { ProjectsList, useGetProjectsQuery } from '@/entities/project'
import { ProjectsSortBar } from '@/features/projectsSortBar'

const ProjectsPage = () => {
  const {
    data: projects = [],
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetProjectsQuery()

  return (
    <div className=" bg-light rounded-2xl">
      <h1 className="text-dark text-2xl px-6.5 py-5">Projects</h1>

      <ProjectsSortBar />

      <ProjectsList
        projects={projects}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        isSuccess={isSuccess}
      />
    </div>
  )
}

export default ProjectsPage
