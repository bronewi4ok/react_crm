import { ProjectCard, type Project } from '@/entities/project'
import { mainRoutes } from '@/shared/config/router'
import { MainList } from '@/shared/ui/mainList'
import { generatePath, useNavigate } from 'react-router-dom'

export function ProjectsList({ projects }: { projects: Project[] }) {
  const navigate = useNavigate()

  return (
    <MainList
      items={projects}
      getKey={(project) => project.id}
      renderItem={(item) =>
        typeof item === 'string' ?
          <div className="p-3 text-xs text-support-700">Updating…</div>
        : <ProjectCard
            project={item}
            onClick={() =>
              navigate(
                generatePath(mainRoutes.projectDetails.navPath, {
                  id: item.id,
                }),
              )
            }
          />
      }
    />
  )
}
