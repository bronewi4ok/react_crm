import type { ReactNode } from 'react'
import type { ChipCorner, ChipSize, ChipVariant } from './configs'

type ChipSizeTypes = keyof typeof ChipSize
type ChipCornerTypes = keyof typeof ChipCorner
type ChipVariantTypes = keyof typeof ChipVariant

export type ChipType = {
  className?: string
  size?: ChipSizeTypes
  corner?: ChipCornerTypes
  variant?: ChipVariantTypes
  children?: ReactNode
}
