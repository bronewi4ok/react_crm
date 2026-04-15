import { ProjectCard } from '@entities/project'
import { frontRoutes } from '@shared/routes'
import { MainList } from '@ui/custom/main-list'
import { generatePath } from 'react-router-dom'
import { useProjectsListContext } from '../model/use-projects-list-context'

export const ProjectsListItems = () => {
  const { projects } = useProjectsListContext()

  return (
    <MainList className="h-full flex-1">
      {projects.map(
        (project) =>
          project.id && (
            <MainList.Item key={project.id}>
              <ProjectCard
                project={project}
                to={generatePath(frontRoutes.main.ProjectDetailsPage.navPath, {
                  id: project.id,
                })}
              />
            </MainList.Item>
          ),
      )}
    </MainList>
  )
}
