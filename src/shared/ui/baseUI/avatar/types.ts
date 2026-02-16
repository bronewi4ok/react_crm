import type { HTMLAttributes } from 'react'
import type { sizeStyles } from './configs'

export type AvatarSizeProps = keyof typeof sizeStyles

export type AvatarProps = {
  src?: string
  alt?: string
  size?: AvatarSizeProps
} & HTMLAttributes<HTMLElement>
