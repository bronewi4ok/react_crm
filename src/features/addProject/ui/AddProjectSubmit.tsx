import { cn } from '@/shared/libs'
import { Button, type ButtonTypes } from '@/shared/ui/baseUI/button'

export type AddProjectSubmitTypes = ButtonTypes<'button'>

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
