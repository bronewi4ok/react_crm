export const baseStyles =
  'inline-flex items-center justify-center gap-2 font-bold cursor-pointer disabled:opacity-50 disabled:pointer-events-none'

export const animationStyles =
  'transition-all duration-200 ease-in-out hover:scale-105 active:scale-95'

export const sizeStyles = {
  sm: 'py-2 px-3 text-sm/6 rounded-md min-h-10',
  md: 'py-2 px-3 text-base/6 rounded-lg min-h-12',
  lg: 'py-3 px-4 text-lg/6 rounded-xl min-h-14',
} as const

export const sizeSquareStyles = {
  sm: 'p-2 text-sm/6 rounded-md h-10 min-w-10',
  md: 'p-3 text-base/6 rounded-lg h-12 min-w-12',
  lg: 'p-4 text-lg/6 rounded-xl h-14 min-w-14',
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
