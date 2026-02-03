import { THEME, type ThemeTypes } from '../model/types'

export const getInitialTheme = (): ThemeTypes => {
  const savedTheme = localStorage.getItem('theme') as ThemeTypes
  if (savedTheme && Object.values(THEME).includes(savedTheme)) return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT
}
