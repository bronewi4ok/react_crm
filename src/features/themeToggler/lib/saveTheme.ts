import type { ThemeTypes } from '../model/types'

export function saveTheme(theme: ThemeTypes) {
  localStorage.setItem('theme', theme)
}
