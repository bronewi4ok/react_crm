import { cn } from '@/shared/lib'
import { Button, type ButtonProps } from '@/shared/ui/baseUI/button'

export type AddProjectSubmitTypes = ButtonProps<'button'>

export function AddProjectSubmit({
  className,
  children,
  variant = 'success',
}: AddProjectSubmitTypes) {
  return (
    <Button className={cn(className)} variant={variant} type="submit">
      {children}
    </Button>
  )
}
