import { THEME, type ThemeTypes } from '../model/types'

export const getInitialTheme = (): ThemeTypes => {
  const savedTheme = localStorage.getItem('theme') as ThemeTypes | null
  if (savedTheme && Object.values(THEME).includes(savedTheme)) return savedTheme

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return isSystemDark ? THEME.DARK : THEME.LIGHT
}
