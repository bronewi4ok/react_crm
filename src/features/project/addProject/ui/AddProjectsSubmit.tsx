import { cn } from '@/shared/lib'
import { Button, type ButtonProps } from '@/shared/ui/baseUI/button'
import { useAddProjectsContext } from '../model/context'

type AddProjectSubmitProps = ButtonProps

export function AddProjectSubmit(props: AddProjectSubmitProps) {
  const { className, children, variant = 'success' } = props
  const { isDisabled } = useAddProjectsContext()

  return (
    <Button className={cn(className)} variant={variant} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  )
}
