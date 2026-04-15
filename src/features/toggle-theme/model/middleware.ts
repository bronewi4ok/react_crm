import type { Middleware } from '@reduxjs/toolkit'
import { applyTheme } from '../lib/apply-theme'
import { saveTheme } from '../lib/save-theme'
import { setTheme, toggleTheme } from './slice'
import type { ThemeStateTypes } from './types'

export const themeMiddleware: Middleware<unknown, ThemeStateTypes> =
  (store) => (next) => (action) => {
    const result = next(action)

    if (toggleTheme.match(action) || setTheme.match(action)) {
      const theme = store.getState().theme
      if (!theme) return
      saveTheme(theme)
      applyTheme(theme)
    }

    return result
  }
