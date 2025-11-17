export const baseStyles =
  'inline-flex items-center gap-2 justify-center font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

export const animationStyles =
  'transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95'

export const sizeStyles = {
  sm: 'p-2 text-sm/6 rounded-md min-h-10',
  md: 'p-3 text-base/6 rounded-lg min-h-12',
  lg: 'p-4 text-lg/6 rounded-xl min-h-14',
} as const
