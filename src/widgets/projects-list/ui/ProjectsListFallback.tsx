import { cn } from '@shared/lib'
import { ErrorFallback } from '@ui/custom/error-fallback'
import { NoProjectsImg, type ProjectsListFallbackProps } from '..'

export const ProjectsListFallback = ({ ...props }: ProjectsListFallbackProps) => {
  const { className, children } = props

  return (
    <div className={cn('flex h-full w-full items-center justify-center', className)}>
      <ErrorFallback>
        <ErrorFallback.Image src={NoProjectsImg} alt="Projects list is empty" />
        <ErrorFallback.Title>No projects found?</ErrorFallback.Title>
        <ErrorFallback.Description>
          Create your first project to get started
        </ErrorFallback.Description>
        {children}
      </ErrorFallback>
    </div>
  )
}
