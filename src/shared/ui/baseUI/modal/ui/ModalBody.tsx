import { cn } from '@/shared/libs'
import type { ModalBodyTypes } from '../model/types'

export function ModalBody({ children, className }: ModalBodyTypes) {
  return <div className={cn('px-7 py-5', className)}>{children}</div>
}
