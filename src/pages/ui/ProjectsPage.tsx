import { useGetProjectsQuery } from '@/entities/project'
import { ProjectList } from '@/widgets/projectsList'

const ProjectsPage = () => {
  const {
    data: projects = [],
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetProjectsQuery()

  return (
    <div>
      <h1>Projects</h1>
      <div className="p-6">
        <ProjectList
          projects={projects}
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  )
}

export default ProjectsPage
