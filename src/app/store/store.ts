import { projectApi } from '@/entities/project/'
import { themeReducer } from '@/features/themeToggler'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
})

setupListeners(store.dispatch)
