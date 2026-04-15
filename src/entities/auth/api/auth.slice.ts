import { createSlice, isAnyOf, type PayloadAction, type SerializedError } from '@reduxjs/toolkit'
import type { AccessTokenTypes, AuthResponseTypes, User } from '@shared/auth'
import { authApi } from './auth.api'

type AuthTypes = {
  user: User | null
  loading: boolean
  accessToken: AccessTokenTypes
  error: SerializedError | null
}
type AuthStateTypes = {
  auth: AuthTypes
}

const initialState: AuthTypes = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<AuthResponseTypes>) {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
    logout(state) {
      state.user = null
      state.accessToken = null
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // 1. Обробка стану завантаження для всіх ключових запитів
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchPending,
          authApi.endpoints.oAuth.matchPending,
          authApi.endpoints.refresh.matchPending,
          authApi.endpoints.signup.matchPending,
        ),
        (state) => {
          state.loading = true
          state.error = null
        },
      )
      // 2. Успішне виконання (Login, Signup, Refresh) — записуємо юзера
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchFulfilled,
          authApi.endpoints.oAuth.matchFulfilled,
          authApi.endpoints.refresh.matchFulfilled,
          authApi.endpoints.signup.matchFulfilled,
        ),
        (state, action) => {
          state.user = action.payload.user
          state.accessToken = action.payload.accessToken
          state.loading = false
          state.error = null
        },
      )
      // 3. Успішний Logout
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null
        state.accessToken = null
        state.loading = false
        state.error = null
      })
      // 4. Помилки: тепер сюди входить і refresh.matchRejected
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchRejected,
          authApi.endpoints.oAuth.matchRejected,
          authApi.endpoints.logout.matchRejected,
          authApi.endpoints.signup.matchRejected,
          authApi.endpoints.refresh.matchRejected,
        ),
        (state, action) => {
          state.user = null
          state.accessToken = null
          state.loading = false
          state.error = action.error
        },
      )
  },
})

export const { setCredentials, logout } = authSlice.actions
export const selectAuthUser = (state: AuthStateTypes) => state.auth.user
export const selectAccessToken = (state: AuthStateTypes) => state.auth.accessToken
export const authReducer = authSlice.reducer
