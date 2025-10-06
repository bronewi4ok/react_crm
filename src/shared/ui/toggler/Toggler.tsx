import clsx from 'clsx'
import type { TogglerTypes } from './types'

function Toggler({ onClick, isActive }: TogglerTypes) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'theme-toggler inline-flex w-13 h-7 rounded-2xl relative p-1 cursor-pointer transition-all duration-300',
        isActive ? 'bg-secondary-900' : 'bg-warning-400',
      )}>
      <span
        className={clsx(
          'block  size-5 rounded-full transition-all duration-300 ease-in-out absolute top-1',
          isActive ?
            'translate-x-6 bg-secondary-700'
          : 'translate-x-0 bg-warning-300',
        )}></span>
    </button>
  )
}

export default Toggler
