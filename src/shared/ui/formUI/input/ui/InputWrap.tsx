import { cn } from '@/shared/lib'
import { useInput } from '../model/hooks'
import type { InputWrapAsTypes, InputWrapTypes } from '../model/types'

export function InputWrap<E extends InputWrapAsTypes = 'div'>({
  as,
  border = true,
  className,
  children,
  ...rest
}: InputWrapTypes<E>) {
  const Component = as ?? 'div'
  const { isError } = useInput()

  return (
    <Component
      {...rest}
      className={cn(
        'flex space-x-3 pt-2.5 pb-2.5',
        border && ['border-frame-500 border-b-1', isError && 'border-danger-500'],
        className,
      )}>
      {children}
    </Component>
  )
}
