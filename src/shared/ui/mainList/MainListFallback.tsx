import { Button } from '@/shared/ui/button'
import type { MainListFallbackProps } from './types'

export function MainListFallback({
  noProjectsImg,
  title,
  message,
  buttonName,
  onClick,
}: MainListFallbackProps) {
  return (
    <div className="w-xl max-w-full mx-auto p-4 flex flex-col items-center">
      <img
        className="w-full mb-11"
        src={noProjectsImg}
      />
      <h2 className="text-4xl font-bold text-center mb-3">{title}</h2>
      <p className="mb-5.5 text-secondary text-sm text-center w-100 max-w-full">
        {message}
      </p>
      <Button
        className="w-50 max-w-full"
        onClick={onClick}>
        {buttonName}
      </Button>
    </div>
  )
}

export default MainListFallback
