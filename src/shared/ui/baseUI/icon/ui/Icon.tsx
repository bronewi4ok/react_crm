import clsx from 'clsx'
import { IconSize } from '../model/configs'
import { type IconTypes } from '../model/types'

export const Icon = ({ name, size = 'xs', className }: IconTypes) => {
  return (
    <svg className={clsx('inline-block shrink-0 fill-current', IconSize[size], className)}>
      <use href={`#${name}`} />
    </svg>
  )
}
