import { cn } from '@/shared/libs'
import type { FormRootTypes } from '../model/types'

export function FormRoot({ onSubmit, className, children }: FormRootTypes) {
  return (
    <form className={cn(className)} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  )
}
