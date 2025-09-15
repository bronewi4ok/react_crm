import { clsx } from 'clsx'
import { sizeStyles, variantStyles, type ButtonProps } from './types'

const baseStyles =
  'inline-flex items-center gap-2 justify-center font-bold cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  ...rest
}: ButtonProps) => {
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
