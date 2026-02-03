import type { CardControlsProps } from '../model/types'

export const CardControls = ({ children, ...props }: CardControlsProps) => {
  return (
    <div className="z-20 flex items-center gap-3" {...props}>
      {children}
    </div>
  )
}
