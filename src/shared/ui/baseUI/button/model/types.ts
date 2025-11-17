import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import type { sizeStyles, variantStyles } from './configs'

type ButtonVariantTypes = keyof typeof variantStyles
type ButtonSizeTypes = keyof typeof sizeStyles

type ButtonBaseTypes = {
  color?: string
  children?: ReactNode
  variant?: ButtonVariantTypes
  size?: ButtonSizeTypes
}

type ButtonAsButtonTypes = ButtonBaseTypes &
  ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLinkTypes = ButtonBaseTypes & LinkProps

export type ButtonTypes = ButtonAsButtonTypes | ButtonAsLinkTypes
