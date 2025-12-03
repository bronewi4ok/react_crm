import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/router'
import type {
  AuthResponseTypes,
  LoginCredentialsTypes,
  RecoverConfirmTypes,
  RecoverTypes,
  SignupCredentialsTypes,
} from '@/shared/types'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthResponseTypes, SignupCredentialsTypes>({
      query: (credentials) => ({
        url: apiRoutes.auth.signup,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    login: build.mutation<AuthResponseTypes, LoginCredentialsTypes>({
      query: (credentials) => ({
        url: apiRoutes.auth.login,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    googleLogin: build.mutation<AuthResponseTypes, { token: string }>({
      query: ({ token }) => ({
        url: apiRoutes.auth.googleLogin,
        method: 'POST',
        body: { token },
      }),
      invalidatesTags: ['User'],
    }),
    logout: build.mutation<{ success: boolean }, void>({
      query: () => ({ url: apiRoutes.auth.logout, method: 'POST' }),
      invalidatesTags: ['User', 'Project', 'Projects'],
    }),
    refresh: build.mutation<AuthResponseTypes, void>({
      query: () => ({ url: apiRoutes.auth.refresh, method: 'POST' }),
    }),
    recover: build.mutation<{ success: boolean }, RecoverTypes>({
      query: (credentials) => ({
        url: apiRoutes.auth.recoverRequest,
        method: 'POST',
        body: credentials,
      }),
    }),
    recoverConfirm: build.mutation<{ success: boolean }, RecoverConfirmTypes>({
      query: (credentials) => ({
        url: apiRoutes.auth.recoverConfirm,
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
  useGoogleLoginMutation,
  useRecoverMutation,
  useRecoverConfirmMutation,
} = authApi
