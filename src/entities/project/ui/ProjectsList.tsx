import { ProjectCard, type ProjectTypes } from '@/entities/project'
import { mainRoutes } from '@/shared/config/router'
import { MainList } from '@/shared/ui/customUI/mainList'
import { generatePath } from 'react-router-dom'

export const ProjectsList = ({ projects }: { projects: ProjectTypes[] }) => {
  return (
    <MainList>
      {projects.map((project) => (
        <MainList.Item key={project.id}>
          <ProjectCard
            project={project}
            to={generatePath(mainRoutes.projectDetails.navPath, { id: project.id })}
          />
        </MainList.Item>
      ))}
    </MainList>
  )
}
