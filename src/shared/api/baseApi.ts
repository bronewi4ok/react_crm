import { logout, setCredentials } from '@/features/auth/api/authSlice'

import type { accessTokenType, AuthResponse, RootState } from '@/shared/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from '../config/router'

const baseQuery = fetchBaseQuery({
  baseUrl: apiRoutes.baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token: accessTokenType = state.auth.accessToken

    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  },
})

const baseQueryWithReauth = async (
  args: Parameters<typeof baseQuery>[0],
  api: Parameters<typeof baseQuery>[1],
  extraOptions: Parameters<typeof baseQuery>[2],
) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery(
      { url: apiRoutes.auth.refresh, method: 'POST' },
      api,
      extraOptions,
    )

    if (refreshResult.data) {
      api.dispatch(setCredentials(refreshResult.data as AuthResponse))
      result = await baseQuery(args, api, extraOptions)
      // } else {
      //   api.dispatch(logout())
      //   window.location.href = authRoutes.login.navPath
      // }
    } else {
      api.dispatch(logout())
      return { error: { status: 401, data: 'Unauthorized' } }
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Project', 'Projects'],
  endpoints: () => ({}),
})
