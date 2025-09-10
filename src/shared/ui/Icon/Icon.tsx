import clsx from 'clsx'
import { type IconType, IconSize } from './Icon.types'

export const Icon = ({ name, size = 'xs', className }: IconType) => {

  return (
    <svg className={clsx(className, 'inline-flex', IconSize[size])}>
      <use href={`#${name}`} />
    </svg>
  )
}
