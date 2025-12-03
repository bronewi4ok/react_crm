import type { AuthResponseTypes, RootState, User } from '@/shared/types'
import {
  createSlice,
  isAnyOf,
  type PayloadAction,
  type SerializedError,
} from '@reduxjs/toolkit'
import { authApi } from './authApi'

type AuthState = {
  user: User | null
  loading: boolean
  accessToken: string | null
  error: SerializedError | null
}

const initialState: AuthState = {
  user: null,
  accessToken: null,

  loading: true,
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchPending,
          authApi.endpoints.googleLogin.matchPending,
          authApi.endpoints.refresh.matchPending,
          authApi.endpoints.signup.matchPending,
        ),
        (state) => {
          state.loading = true
          state.error = null
        },
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchFulfilled,
          authApi.endpoints.googleLogin.matchFulfilled,
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
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null
        state.accessToken = null
        state.loading = false
        state.error = null
      })
      .addMatcher(
        isAnyOf(
          authApi.endpoints.login.matchRejected,
          authApi.endpoints.googleLogin.matchRejected,
          authApi.endpoints.refresh.matchRejected,
          authApi.endpoints.logout.matchRejected,
          authApi.endpoints.signup.matchRejected,
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
export const selectAuthUser = (state: RootState) => state.auth.user
export const selectAccessToken = (state: RootState) => state.auth.accessToken
export default authSlice.reducer
