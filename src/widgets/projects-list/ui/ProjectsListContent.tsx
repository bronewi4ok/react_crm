import { ProjectFallback } from '@entities/project/ui/ProjectFallback'
import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Loader } from '@ui/base/loader'
import { Overlay } from '@ui/base/overlay'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useProjectsListContext } from '..'

// ======================================
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
      <ProjectFallback
        title="Failed to load projects"
        text="We couldn’t fetch the projects list. Please check your connection or try again."
        actions={
          <Button onClick={() => refetch()} variant="primary">
            Retry
          </Button>
        }
      />
    )

  if (!hasProjects)
    return (
      <ProjectFallback
        title="Projects list is empty"
        text="Create your first project to get started"
        actions={
          <Button asChild onClick={() => refetch()} variant="primary">
            <Link to={FRONT_ROUTES.main.ProjectUpdatePage.navPath}>Create Project</Link>
          </Button>
        }
      />
    )

  return (
    <section className="bg-light flex flex-1 flex-col overflow-clip rounded-2xl">
      {children}
    </section>
  )
}
