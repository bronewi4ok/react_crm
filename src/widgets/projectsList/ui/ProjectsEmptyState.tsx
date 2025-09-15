import { Button } from '@/shared/ui/button'
import { EmptyState } from '@/shared/ui/emptyState'
import noProjectsImg from './no_projects.svg'

export function ProjectsEmptyState() {
  return (
    <EmptyState
      image={noProjectsImg}
      title="No projects found?"
      description="Try to assign more tasks to your employees or create a new project and setup it from scratch">
      <Button>Add project</Button>
    </EmptyState>
  )
}
