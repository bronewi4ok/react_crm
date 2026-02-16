import { cn } from '@/shared/lib'
import type { ModalBodyTypes } from '../model/types'

export function ModalBody({ children, className }: ModalBodyTypes) {
  return <div className={cn('px-7 py-5', className)}>{children}</div>
}
