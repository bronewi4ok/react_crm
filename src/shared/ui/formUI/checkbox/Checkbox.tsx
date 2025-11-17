import clsx from 'clsx'
import { Icon } from '../../baseUI/icon'
import type { CheckboxTypes } from './types'

export function Checkbox({ title, className, ...rest }: CheckboxTypes) {
  return (
    <label
      className={clsx(
        'inline-flex items-center gap-3 cursor-pointer',
        className,
      )}>
      <input
        className="peer hidden"
        type="checkbox"
        {...rest}
      />
      <span className="w-5 h-5 flex items-center justify-center text-transparent bg-support-600 rounded peer-checked:bg-primary-500 peer-checked:text-white transition-colors relative">
        <Icon
          name="common-check"
          size="2xs"
          className="fill-current"
        />
      </span>
      {title && <span className="text-dark">{title}</span>}
    </label>
  )
}
