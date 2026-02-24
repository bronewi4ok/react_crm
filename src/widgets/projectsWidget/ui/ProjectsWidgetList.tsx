import { ProjectCard } from '@/entities/project'
import { frontRoutes } from '@/shared/config/routes'
import { MainList } from '@/shared/ui/customUI/mainList'
import { generatePath } from 'react-router-dom'
import { useProjectsWidgetContext } from '../model/useProjectsWidgetContext'

export const ProjectsWidgetList = () => {
  const { projects } = useProjectsWidgetContext()

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
