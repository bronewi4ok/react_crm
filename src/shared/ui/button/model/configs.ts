export const baseStyles =
  'inline-flex items-center gap-2 justify-center font-bold cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

export const variantStyles = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  secondary:
    'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
  success:
    'bg-success-500 text-white hover:bg-success-600 active:bg-success-700',
  attention:
    'bg-attention-500 text-white hover:bg-attention-600 active:bg-attention-700',
  danger: 'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700',
  support:
    'bg-support-500 text-secondary hover:bg-support-600 active:bg-support-700',
} as const

export const sizeStyles = {
  sm: 'p-2 text-sm rounded-md',
  md: 'p-3 text-base rounded-lg',
  lg: 'p-4 text-lg rounded-xl',
} as const
