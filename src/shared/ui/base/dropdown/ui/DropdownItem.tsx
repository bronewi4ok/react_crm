import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { motion, useAnimationControls } from 'motion/react'
import { useDropdownActions } from '../model/hooks'
import type { DropdownItemTypes } from '../model/types'

export function DropdownItem({ children, title, onSelect }: DropdownItemTypes) {
  const controls = useAnimationControls()
  const { closeMenu } = useDropdownActions()

  const handleSelect: DropdownMenu.DropdownMenuItemProps['onSelect'] = async (e) => {
    e.preventDefault()
    await controls.start({ x: [null, 20, 0] })
    await closeMenu?.()
    onSelect?.()
  }

  return (
    <DropdownMenu.Item
      asChild
      className="text-dark data-[highlighted]:bg-secondary-100 cursor-pointer px-4 py-2 focus:outline-none"
      onSelect={(e) => handleSelect(e)}>
      <motion.div
        className="text-primary-500 space-x-4"
        animate={controls}
        transition={{ duration: 0.3 }}>
        {children}
        <span className="text-dark text-md">{title}</span>
      </motion.div>
    </DropdownMenu.Item>
  )
}
