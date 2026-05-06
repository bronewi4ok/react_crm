import { cn } from '@shared/lib'
import { ErrorFallback } from '@ui/custom/error-fallback'
import type { HTMLAttributes, ReactNode } from 'react'
import NoProjectsImg from './no_projects.svg'

// ======================================
export type Props = {
  title?: string
  text?: string
  image?: string
  actions: ReactNode
  // onRetry?: () => void
} & HTMLAttributes<HTMLElement>

// ======================================
export const ProjectFallback = (props: Props) => {
  const {
    className,
    image = NoProjectsImg,
    title = 'No project(s) found!',
    text = 'Create a project to get started',
    actions,
  } = props

  return (
    <div className={cn('flex h-full w-full items-center justify-center', className)}>
      <ErrorFallback>
        <ErrorFallback.Image src={image} alt={title} />
        <ErrorFallback.Title>{title}</ErrorFallback.Title>
        <ErrorFallback.Description>{text}</ErrorFallback.Description>

        {actions && <ErrorFallback.Actions>{actions}</ErrorFallback.Actions>}
      </ErrorFallback>
    </div>
  )
}
