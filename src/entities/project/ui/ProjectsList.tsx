import { ProjectCard, type ProjectsListProps } from '@/entities/project'
import { Button } from '@/shared/ui/button'
import { EmptyState } from '@/shared/ui/emptyState'
import { MainList } from '@/shared/ui/mainList'
import noProjectsImg from './no_projects.svg'

export function ProjectsList({
  projects,
  isLoading,
  isError,
  isSuccess,
}: ProjectsListProps) {
  if (isError) {
    return (
      <div className="p-4 text-sm text-danger-700">Failed to load projects</div>
    )
  }

  if (isLoading) {
    return <div className="p-4 text-sm text-support-700">Loading…</div>
  }

  if (isSuccess && projects.length === 0) {
    return (
      <EmptyState
        image={noProjectsImg}
        title="No projects found?"
        description="Try to assign more tasks to your employees or create a new project and setup it from scratch">
        <Button>Add project</Button>
      </EmptyState>
    )
  }

  return (
    <MainList
      items={projects}
      getKey={(p) => p.id}
      renderItem={(item) =>
        typeof item === 'string' ?
          <div className="p-3 text-xs text-support-700">Updating…</div>
        : <ProjectCard project={item} />
      }
    />
  )
}
