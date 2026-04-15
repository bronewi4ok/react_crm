import { Icon, type IconTypes } from '@ui/base/icon'
import type { HTMLAttributes } from 'react'

export type LoaderTypes = {
  size?: IconTypes['size']
} & HTMLAttributes<HTMLElement>

export const Loader = ({ size = 'lg', className }: LoaderTypes) => {
  return <Icon size={size} name="loader" className={className} />
}
