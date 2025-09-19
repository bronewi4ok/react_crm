import { type SortBarProps } from '../model/types'

export function SortBar({ children }: SortBarProps) {
  
  return (
    <div className="flex items-center gap-4 px-6.5 py-4 bg-back-50">
      {children}
    </div>
  )
}
