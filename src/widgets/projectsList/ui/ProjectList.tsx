import { ProjectCard } from '@/entities/project'
import { Button } from '@/shared/ui/button'
import { EmptyState } from '@/shared/ui/emptyState'
import { MainList, MainListItem } from '@/shared/ui/mainList'
import type { ProjectListProps } from '../model/types'
import noProjectsImg from './no_projects.svg'

export function ProjectList({
  projects,
  isLoading,
  isError,
  isFetching,
  isSuccess,
}: ProjectListProps) {
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
    <MainList>
      {isFetching && (
        <MainListItem>
          <div className="p-3 text-xs text-support-700">Updating…</div>
        </MainListItem>
      )}

      {projects.map((project) => (
        <MainListItem key={project.id}>
          <ProjectCard project={project} />
        </MainListItem>
      ))}
    </MainList>
  )
}
