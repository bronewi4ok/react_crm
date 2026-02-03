import { cn } from '@/shared/libs'
import { useInput } from '../model/hooks'
import type { InputLabelTypes } from '../model/types'

export function InputLabel({ className, children }: InputLabelTypes) {
  const { id } = useInput()

  return (
    <label htmlFor={id} className={cn('text text-dark block text-base', className)}>
      {children}
    </label>
  )
}
