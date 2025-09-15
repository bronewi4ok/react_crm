import { ProjectCard } from '@/entities/project'
import { MainList, MainListItem } from '@/shared/ui/mainList'
import type { ProjectListProps } from '../model/types'
import { ProjectsEmptyState } from './ProjectsEmptyState'

export function ProjectList({
  projects,
  isLoading,
  isError,
  isFetching,
}: ProjectListProps) {
  if (isError) {
    return (
      <div className="p-4 text-sm text-danger-700">Failed to load projects</div>
    )
  }

  if (isLoading) {
    return <div className="p-4 text-sm text-support-700">Loading…</div>
  }

  return (
    <MainList>
      {isFetching && (
        <MainListItem>
          <div className="p-3 text-xs text-support-700">Updating…</div>
        </MainListItem>
      )}

      {projects.length === 0 ?
        <MainListItem>
          <ProjectsEmptyState />
        </MainListItem>
      : projects.map((project) => (
          <MainListItem key={project.id}>
            <ProjectCard project={project} />
          </MainListItem>
        ))
      }
    </MainList>
  )
}
