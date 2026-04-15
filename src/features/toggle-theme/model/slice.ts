import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { THEME, type ThemeTypes } from './types'

const initialState = THEME.LIGHT as ThemeTypes

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeTypes>) => action.payload,
    toggleTheme: (state) => (state === THEME.LIGHT ? THEME.DARK : THEME.LIGHT),
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
