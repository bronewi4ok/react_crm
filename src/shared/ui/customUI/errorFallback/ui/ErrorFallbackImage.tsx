import { cn } from '@/shared/lib'
import type { ErrorFallbackImageProps } from '../model/types'

export function ErrorFallbackImage({ src, alt, className }: ErrorFallbackImageProps) {
  return <img className={cn('mb-11 w-full', className)} src={src} alt={alt} />
}
