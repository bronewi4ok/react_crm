import { ProjectCard } from '@entities/project'
import { MainList } from '@ui/custom/main-list'
import { generatePath, useLocation } from 'react-router-dom'
import { useProjectsListContext } from '../model/use-projects-list-context'

// ======================================
export const ProjectsListItems = () => {
  const { projects } = useProjectsListContext()
  const location = useLocation()

  return (
    <MainList className="h-full flex-1">
      {projects.map((project) => {
        if (!project.id) return

        return (
          <MainList.Item key={project.id}>
            <ProjectCard
              project={project}
              to={generatePath('/projects/:id', { id: project.id })}
              state={{ fromSearch: location.search }}
            />
          </MainList.Item>
        )
      })}
    </MainList>
  )
}
