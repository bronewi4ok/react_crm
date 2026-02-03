import clsx from 'clsx'
import { Dialog } from 'radix-ui'
import type { ModalCrossTypes } from '../model/types'

export function ModalCross({ children, className }: ModalCrossTypes) {
  return (
    <Dialog.Close
      className={clsx(
        'hover:text-danger-500 -m-3 cursor-pointer p-3 leading-0 text-zinc-400 outline-0 duration-300 dark:text-zinc-600',
        className,
      )}>
      {children}
    </Dialog.Close>
  )
}
