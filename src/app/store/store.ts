import { projectApi } from '@/entities/project/'
import projectsSortSlice from '@/features/projectsSortBar/model/slices'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [projectsSortSlice.name]: projectsSortSlice.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
})

setupListeners(store.dispatch)
