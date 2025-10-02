import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { sizeStyles, variantStyles } from './configs'

export type ButtonVariantTypes = keyof typeof variantStyles
export type ButtonSizeTypes = keyof typeof sizeStyles

export type ButtonTypes = {
  children?: ReactNode
  variant?: ButtonVariantTypes
  size?: ButtonSizeTypes
} & ButtonHTMLAttributes<HTMLButtonElement>
