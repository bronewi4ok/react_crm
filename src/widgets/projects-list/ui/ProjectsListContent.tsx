import { Button } from '@ui/base/button'
import { Loader } from '@ui/base/loader'
import { Overlay } from '@ui/base/overlay'
import type { ReactNode } from 'react'
import { NoProjectsImg, useProjectsListContext } from '..'
import { ProjectsListFallback } from './ProjectsListFallback'

export const ProjectsListContent = ({ children }: { children: ReactNode }) => {
  const { refetch, isLoading, isError, hasProjects } = useProjectsListContext()

  if (isLoading) {
    return (
      <Overlay full className="bg-amber-500">
        <Loader size="2xl" />
      </Overlay>
    )
  }

  if (isError)
    return (
      <ProjectsListFallback
        title="Failed to load projects"
        text="We couldn’t fetch the projects list. Please check your connection or try again."
        image={NoProjectsImg}>
        <Button onClick={() => refetch()} variant="primary">
          Retry
        </Button>
      </ProjectsListFallback>
    )

  if (!hasProjects)
    return (
      <ProjectsListFallback
        image={NoProjectsImg}
        title="Projects list is empty"
        text="Create your first project to get started"
        onRetry={() => refetch()}
      />
    )

  return (
    <section className="bg-light flex flex-1 flex-col overflow-clip rounded-2xl">
      {children}
    </section>
  )
}
