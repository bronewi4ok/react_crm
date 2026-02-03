import clsx from 'clsx'
import { DropdownMenu } from 'radix-ui'

export function DropdownSeparator({ className }: { className?: string }) {
  return <DropdownMenu.Separator className={clsx('bg-frame-500 h-px rounded-xs', className)} />
}
