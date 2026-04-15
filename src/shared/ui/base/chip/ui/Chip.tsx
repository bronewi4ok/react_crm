import clsx from 'clsx'
import { ChipCorner, ChipSize, ChipVariant } from '../model/configs'
import type { ChipType } from '../model/types'

export function Chip({
  size = 'xs',
  corner = 'md',
  variant = 'primary',
  children,
  className,
}: ChipType) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center',
        ChipSize[size],
        ChipVariant[variant],
        ChipCorner[corner],
        className,
      )}>
      {children}
    </div>
  )
}
