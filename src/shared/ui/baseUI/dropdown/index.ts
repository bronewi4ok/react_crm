import { Dropdown as Root } from './ui/Dropdown'
import { DropdownBox } from './ui/DropdownBox'
import { DropdownItem } from './ui/DropdownItem'
import { DropdownSeparator } from './ui/DropdownSeparator'
import { DropdownTrigger } from './ui/DropdownTrigger'
export * from './model/context'
export * from './model/hooks'
export * from './model/types'

export const Dropdown = Object.assign(Root, {
  Trigger: DropdownTrigger,
  Box: DropdownBox,
  Item: DropdownItem,
  Separator: DropdownSeparator,
})
