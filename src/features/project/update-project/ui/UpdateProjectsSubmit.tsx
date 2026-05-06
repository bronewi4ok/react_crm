import { cn } from '@shared/lib'
import { Button, type ButtonProps } from '@ui/base/button'
import { useUpdateProjectsContext } from '../model/context'

type UpdateProjectSubmitProps = ButtonProps

export const UpdateProjectSubmit = (props: UpdateProjectSubmitProps) => {
  const { className, children, variant = 'success' } = props
  const { isDisabled } = useUpdateProjectsContext()

  return (
    <Button className={cn(className)} variant={variant} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  )
}
