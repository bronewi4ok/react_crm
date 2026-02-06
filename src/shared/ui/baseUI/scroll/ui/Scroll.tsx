import { cn } from '@/shared/lib'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import type { HTMLAttributes } from 'react'

export function Scroll({ children, className }: HTMLAttributes<HTMLElement>) {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className={cn(className)}>{children}</ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation="vertical"
        className={cn(
          'bg-frame-200 hover:bg-frame-400 flex w-2.5 px-0.5 py-1.5',
          'z-2 transition-colors duration-[160ms] ease-out',
        )}>
        <ScrollArea.Thumb className="bg-frame-700 relative flex-1 rounded-full" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
