import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { THEME_TYPES, type ThemeStateTypes, type ThemeTypes } from './types'

const getInitialTheme = (): ThemeTypes => {
  const savedTheme = localStorage.getItem('theme') as ThemeTypes
  if (
    savedTheme &&
    (savedTheme === THEME_TYPES.LIGHT || savedTheme === THEME_TYPES.DARK)
  ) {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ?
      THEME_TYPES.DARK
    : THEME_TYPES.LIGHT
}

const initialState: ThemeStateTypes = { current: getInitialTheme() }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeTypes>) => {
      state.current = action.payload
      localStorage.setItem('theme', action.payload)
      document.documentElement.dataset.theme = action.payload
    },
    toggleTheme: (state) => {
      const nextTheme: ThemeTypes =
        state.current === THEME_TYPES.LIGHT ?
          THEME_TYPES.DARK
        : THEME_TYPES.LIGHT

      state.current = nextTheme // ✅ Додаємо оновлення state!
      localStorage.setItem('theme', nextTheme)
      document.documentElement.dataset.theme = nextTheme
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
