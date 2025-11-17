import clsx from 'clsx'
import { IconSize } from '../model/config'
import { type IconTypes } from '../model/types'

export const Icon = ({ name, size = 'xs', className }: IconTypes) => {
  return (
    <svg className={clsx(className, 'inline-flex', IconSize[size])}>
      <use href={`#${name}`} />
    </svg>
  )
}
