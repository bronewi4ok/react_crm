import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { THEME, type ThemeStateTypes, type ThemeTypes } from './types'

const initialState: ThemeStateTypes = { current: THEME.LIGHT }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeTypes>) => {
      state.current = action.payload
    },
    toggleTheme: (state) => {
      state.current = state.current === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
