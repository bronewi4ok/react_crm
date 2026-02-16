import authReducer from '@/features/auth/api/authSlice'
import { themeReducer } from '@/features/themeToggler'
import { themeMiddleware } from '@/features/themeToggler/model/middleware'
import { baseApi } from '@/shared/api/baseApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(themeMiddleware),
})

setupListeners(store.dispatch)
