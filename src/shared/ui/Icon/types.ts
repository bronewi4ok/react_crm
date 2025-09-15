import ids from 'virtual:svg-icons-names'

type IconName = (typeof ids)[number]

export const IconSize = {
  xs: 'size-4',
  sm: 'size-4.5',
  md: 'size-5',
  lg: 'size-5.5',
  xl: 'size-7',
} as const

type IconSizeKey = keyof typeof IconSize

export type IconType = {
  name: IconName
  size?: IconSizeKey
  color?: string
  className?: string
}
