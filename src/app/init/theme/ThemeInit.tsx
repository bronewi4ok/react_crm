import { getInitialTheme, setTheme } from '@features/toggle-theme'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const ThemeInit = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const theme = getInitialTheme()
    dispatch(setTheme(theme))
  }, [dispatch])

  return null
}
