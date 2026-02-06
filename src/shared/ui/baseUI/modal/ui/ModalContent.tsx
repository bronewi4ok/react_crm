import { cn } from '@/shared/lib'
import { Scroll } from '@/shared/ui/baseUI/scroll'
import * as Dialog from '@radix-ui/react-dialog'
import type { ModalContentTypes } from '../model/types'

export function ModalContent({ children, className }: ModalContentTypes) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-dark/10 fixed inset-0 flex items-center justify-center">
        <Dialog.Content
          className={cn(
            'max-h-[90vh] w-[40vw]',
            'bg-light text-dark rounded-lg shadow',
            className,
          )}>
          <Scroll className="max-h-[90vh]">{children}</Scroll>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
