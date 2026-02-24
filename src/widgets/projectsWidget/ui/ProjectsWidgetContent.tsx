import { Button } from '@/shared/ui/baseUI/button'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'
import type { ReactNode } from 'react'
import { NoProjectsImg, useProjectsWidgetContext } from '..'
import { ProjectsWidgetFallback } from './ProjectsWidgetFallback'

export const ProjectsWidgetContent = ({ children }: { children: ReactNode }) => {
  const { refetch, isLoading, isError, hasProjects } = useProjectsWidgetContext()

  if (isLoading) {
    return (
      <Overlay full className="bg-amber-500">
        <Loader size="2xl" />
      </Overlay>
    )
  }

  if (isError)
    return (
      <ProjectsWidgetFallback
        title="Failed to load projects"
        text="We couldn’t fetch the projects list. Please check your connection or try again."
        image={NoProjectsImg}>
        <Button onClick={() => refetch()} variant="primary">
          Retry
        </Button>
      </ProjectsWidgetFallback>
    )

  if (!hasProjects)
    return (
      <ProjectsWidgetFallback
        image={NoProjectsImg}
        title="Projects list is empty"
        text="Create your first project to get started"
        onRetry={() => refetch()}
      />
    )

  return children
}
