import { cn } from '@shared/lib'
import { Button, type ButtonProps } from '@ui/base/button'
import { useCreateProjectsContext } from '../model/context'

type CreateProjectSubmitProps = ButtonProps

export function CreateProjectSubmit(props: CreateProjectSubmitProps) {
  const { className, children, variant = 'success' } = props
  const { isDisabled } = useCreateProjectsContext()

  return (
    <Button className={cn(className)} variant={variant} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  )
}
