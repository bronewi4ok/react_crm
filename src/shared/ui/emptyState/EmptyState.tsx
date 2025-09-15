import type { EmptyStateProps } from './types'

export function EmptyState({
  image,
  title,
  description,
  children,
}: EmptyStateProps) {
  return (
    <div className="w-xl max-w-full mx-auto p-4 flex flex-col items-center">
      {image && (
        <img
          className="w-full mb-11"
          src={image}
          alt=""
        />
      )}
      <h2 className="text-4xl font-bold text-center mb-3">{title}</h2>
      <p className="mb-5.5 text-secondary text-sm text-center w-100 max-w-full">
        {description}
      </p>
      {children}
    </div>
  )
}
