import { cn } from '@/shared/libs'
import { Avatar as RadixAvatar } from 'radix-ui'
import { sizeStyles } from './configs'
import type { AvatarProps } from './types'

export const Avatar = ({ src, alt, className, size = 'md' }: AvatarProps) => {
  return (
    <RadixAvatar.Root
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-md align-middle select-none',
        sizeStyles[size],
        className,
      )}>
      <RadixAvatar.Image className="size-full rounded-[inherit] object-cover" src={src} alt={alt} />

      <RadixAvatar.Fallback className="text-secondary-500 bg-back-400 flex size-full items-center justify-center leading-1 font-medium">
        FB
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
