import { authReducer } from '@entities/auth'
import { themeMiddleware, themeReducer } from '@features/toggle-theme'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '@shared/api'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, themeMiddleware),
})

setupListeners(store.dispatch)
