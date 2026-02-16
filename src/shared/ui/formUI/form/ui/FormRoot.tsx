import { cn } from '@/shared/lib'
import type { FormRootTypes } from '../model/types'

export function FormRoot({ onSubmit, className, children }: FormRootTypes) {
  return (
    <form className={cn(className)} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  )
}
