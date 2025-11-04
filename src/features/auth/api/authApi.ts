import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/router'
import type {
  AuthResponse,
  LoginCredentials,
  SignupCredentials,
} from '@/shared/types'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthResponse, SignupCredentials>({
      query: (credentials) => ({
        url: apiRoutes.auth.signup,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    login: build.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: apiRoutes.auth.login,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    googleLogin: build.mutation<AuthResponse, { token: string }>({
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
    refresh: build.mutation<AuthResponse, void>({
      query: () => ({ url: apiRoutes.auth.refresh, method: 'POST' }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useSignupMutation,
  useGoogleLoginMutation,
} = authApi
