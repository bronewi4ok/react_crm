import { clsx } from 'clsx'
import { baseStyles, sizeStyles, variantStyles } from '../model/configs'
import type { ButtonTypes } from '../model/types'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  ...rest
}: ButtonTypes) => {
  return (
    <button
      type="button"
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  )
}
