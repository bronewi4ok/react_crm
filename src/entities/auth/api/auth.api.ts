import { API_ROUTES, baseApi } from '@shared/api'
import type {
  AuthResponseTypes,
  LoginCredentialsTypes,
  RecoverConfirmTypes,
  RecoverTypes,
  SignupCredentialsTypes,
} from '@shared/auth'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthResponseTypes, SignupCredentialsTypes>({
      query: (credentials) => ({
        url: API_ROUTES.SIGNUP,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    login: build.mutation<AuthResponseTypes, LoginCredentialsTypes>({
      query: (credentials) => ({
        url: API_ROUTES.LOGIN,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    oAuth: build.mutation<AuthResponseTypes, { token: string }>({
      query: ({ token }) => ({
        url: API_ROUTES.OAUTH,
        method: 'POST',
        body: { token },
      }),
      invalidatesTags: ['User'],
    }),
    logout: build.mutation<{ success: boolean }, void>({
      query: () => ({ url: API_ROUTES.LOGOUT, method: 'POST' }),
      invalidatesTags: ['User', 'Project'],
    }),
    refresh: build.mutation<AuthResponseTypes, void>({
      query: () => ({ url: API_ROUTES.REFRESH, method: 'POST' }),
    }),
    recover: build.mutation<{ success: boolean }, RecoverTypes>({
      query: (credentials) => ({
        url: API_ROUTES.RECOVER_REQUEST,
        method: 'POST',
        body: credentials,
      }),
    }),
    recoverConfirm: build.mutation<{ success: boolean }, RecoverConfirmTypes>({
      query: (credentials) => ({
        url: API_ROUTES.RECOVER_CONFIRM,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useSignupMutation,
  useOAuthMutation,
  useRecoverMutation,
  useRecoverConfirmMutation,
} = authApi
