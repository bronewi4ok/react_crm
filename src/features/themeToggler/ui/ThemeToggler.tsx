import { useAppDispatch, useAppSelector } from '@/app/store'
import Toggler from '@/shared/ui/toggler/Toggler'
import { toggleTheme } from '../model/slice'

export function ThemeToggler() {
  const theme = useAppSelector((state) => state.theme.current)
  const dispatch = useAppDispatch()

  return (
    <Toggler
      isActive={theme === 'dark'}
      onClick={() => dispatch(toggleTheme())}
    />
  )
}
