import type { ThemeTypes } from '../model/types'

export function applyTheme(theme: ThemeTypes) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  root.dataset.theme = theme

  window.setTimeout(() => {
    root.classList.remove('theme-transition')
  }, 200)
}
