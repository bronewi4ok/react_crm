import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, easeIn, motion } from 'motion/react'
import { type ReactNode } from 'react'
import { DropdownActionsContext } from '../model/context'
import { useDropdownControls, useDropdownState } from '../model/hooks'

export function DropdownBox({ children }: { children: ReactNode }) {
  const { open, setOpen } = useDropdownState()
  const { controls, closeMenu } = useDropdownControls(open, setOpen)
  const dropdownVariants = {
    open: { opacity: 1, transition: { ease: easeIn, duration: 0.2 } },
    closed: { opacity: 0, transition: { ease: easeIn, duration: 0.3 } },
  }

  return (
    <DropdownActionsContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              collisionPadding={20}
              asChild
              className="bg-light overflow-hidden rounded-lg">
              <motion.div
                initial={'closed'}
                animate={controls}
                exit={'closed'}
                variants={dropdownVariants}>
                <DropdownMenu.Arrow className="fill-light" />

                {children}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownActionsContext.Provider>
  )
}
