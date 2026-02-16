import { useAppDispatch } from '@/shared/hooks/store'
import { applyTheme, getInitialTheme, setTheme } from '@/features/themeToggler'
import { useEffect } from 'react'

export const ThemeInit = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const theme = getInitialTheme()
    dispatch(setTheme(theme))
    applyTheme(theme)
  }, [dispatch])

  return null
}
