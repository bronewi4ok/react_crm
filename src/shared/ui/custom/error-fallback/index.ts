import { ErrorFallbackDescription } from './ui/ErrorFallbackDescription'
import { ErrorFallbackImage } from './ui/ErrorFallbackImage'
import { ErrorFallbackRoot as Root } from './ui/ErrorFallbackRoot'
import { ErrorFallbackTitle } from './ui/ErrorFallbackTitle'

export const ErrorFallback = Object.assign(Root, {
  Image: ErrorFallbackImage,
  Title: ErrorFallbackTitle,
  Description: ErrorFallbackDescription,
})

export * from './model/types'
