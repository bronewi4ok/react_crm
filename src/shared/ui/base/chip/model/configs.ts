export const ChipSize = {
  '2xs': 'size-8 p-2',
  'xs': 'size-9 p-2',
  'sm': 'size-10 p-2',
  'md': 'size-11 p-2',
  'lg': 'size-12 p-2',
  'xl': 'size-13 p-2',
  '2xl': 'size-14 p-2',
} as const

export const ChipCorner = {
  '2xs': 'rounded-xs',
  'xs': 'rounded-sm',
  'sm': 'rounded-md',
  'md': 'rounded-lg',
  'lg': 'rounded-xl',
  'xl': 'rounded-2xl',
  '2xl': 'rounded-3xl',
} as const

export const ChipVariant = {
  primary: 'bg-primary-50 text-primary-500',
  secondary: 'bg-secondary-50 text-secondary-500',
  support: 'bg-support-50 text-support-500',
  attention: 'bg-attention-50 text-attention-500',
  success: 'bg-success-50 text-success-500',
  danger: 'bg-danger-50 text-danger-500',
  warning: 'bg-warning-50 text-warning-500',
  border: 'bg-frame-50 text-frame-500',
  back: 'bg-back-50 text-back-500',
} as const
