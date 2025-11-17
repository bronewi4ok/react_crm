import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { animationStyles, baseStyles, sizeStyles } from '../model/configs'
import type { ButtonTypes } from '../model/types'

export function Button(props: ButtonTypes) {
  const {
    children,
    size = 'md',
    color = 'primary-500',
    className,
    ...rest
  } = props

  const classes = clsx(
    baseStyles,
    animationStyles,
    color,
    sizeStyles[size],
    className,
  )

  if ('to' in rest) {
    return (
      <Link
        className={clsx(classes)}
        {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={clsx(classes)}
      {...rest}>
      {children}
    </button>
  )
}
