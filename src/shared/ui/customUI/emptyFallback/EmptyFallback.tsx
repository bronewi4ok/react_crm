import type { EmptyFallbackTypes } from './types'

export function EmptyFallback({ image, title, description, children }: EmptyFallbackTypes) {
  return (
    <div className="mx-auto flex w-xl max-w-full flex-col items-center p-4">
      {image && <img className="mb-11 w-full" src={image} alt="" />}
      <h2 className="mb-3 text-center text-4xl font-bold">{title}</h2>
      <p className="text-secondary mb-5.5 w-100 max-w-full text-center text-sm">{description}</p>
      {children}
    </div>
  )
}
