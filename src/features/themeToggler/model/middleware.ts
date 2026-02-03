import type { Middleware } from '@reduxjs/toolkit'
import { applyTheme } from '../lib/applyTheme'
import { saveTheme } from '../lib/saveTheme'
import { toggleTheme } from './slice'

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)

  if (toggleTheme.match(action)) {
    const theme = store.getState().theme.current
    saveTheme(theme)
    applyTheme(theme)
  }

  return result
}
