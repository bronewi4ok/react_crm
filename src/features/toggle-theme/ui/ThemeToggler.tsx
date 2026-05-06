import { Toggler } from '@ui/base/toggler/Toggler'
import { useDispatch, useSelector } from 'react-redux'

import { selectTheme } from '../model/selector'
import { toggleTheme } from '../model/slice'
import { THEME } from '../model/types'

export function ThemeToggler() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <Toggler
      checked={theme === THEME.DARK}
      onChange={() => dispatch(toggleTheme())}
      aria-label="toggle theme"
    />
  )
}
