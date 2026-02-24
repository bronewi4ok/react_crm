import { type HTMLAttributes } from 'react'

export type ErrorFallbackRootProps = HTMLAttributes<HTMLElement>
export type ErrorFallbackTitleProps = HTMLAttributes<HTMLElement>
export type ErrorFallbackDescriptionProps = HTMLAttributes<HTMLElement>
export type ErrorFallbackImageProps = { src: string; alt: string } & HTMLAttributes<HTMLElement>
