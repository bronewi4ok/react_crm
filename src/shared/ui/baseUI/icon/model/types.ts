import ids from 'virtual:svg-icons-names'
import type { IconSize } from './config'

type IconNameTypes = (typeof ids)[number]
type IconSizeKeyTypes = keyof typeof IconSize

export type IconTypes = {
  name: IconNameTypes
  size?: IconSizeKeyTypes
  color?: string
  className?: string
}
