export const BUTTON_DEFAULT_ELEMENT = 'button' as const

export const baseStyles =
  'inline-flex items-center justify-center gap-2 font-bold cursor-pointer disabled:opacity-50 disabled:pointer-events-none overflow-hidden'

export const animationStyles =
  'transition-all duration-200 ease-in-out hover:scale-105 active:scale-95'

export const sizeStyles = {
  sm: 'py-2 px-3 text-sm rounded-md min-h-10',
  md: 'py-2 px-3 text-base rounded-lg min-h-12',
  lg: 'py-3 px-4 text-lg rounded-xl min-h-14',
} as const

export const sizeSquareStyles = {
  sm: 'p-2 text-sm rounded-md size-10 over',
  md: 'p-2 text-base rounded-lg size-12',
  lg: 'p-2 text-lg rounded-xl size-14',
}

export const variantStyles = {
  primary: 'text-white bg-primary-500',
  secondary: 'text-white bg-secondary-500',
  attention: 'text-white bg-attention-500',
  success: 'text-white bg-success-700',
  danger: 'text-white bg-danger-500',
  warning: 'text-white bg-warning-500',
  support: 'text-dark bg-support-700',
  light: 'text-black bg-light-500',
  dark: 'text-white bg-dark-500',
} as const
