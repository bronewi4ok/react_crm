import { logout, setCredentials } from '@/features/auth/api/authSlice'
import { apiRoutes } from '@/shared/config/router'
import { refreshMutex } from '@/shared/libs/refreshMutex'
import type { AccessTokenTypes, AuthResponseTypes, RootState } from '@/shared/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: apiRoutes.baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token: AccessTokenTypes = state.auth.accessToken

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
    // If the failing request was the refresh endpoint itself, don't try to refresh again
    const argsUrl = typeof args === 'string' ? args : (args as any)?.url
    if (argsUrl === apiRoutes.auth.refresh) {
      api.dispatch(logout())
      return { error: { status: 401, data: 'Unauthorized' } }
    }

    if (refreshMutex.isLocked()) {
      // Wait for other refresh to complete
      await refreshMutex.waitForUnlock()
      // After unlock, retry the original request with potentially new token
      result = await baseQuery(args, api, extraOptions)
    } else {
      // Acquire mutex and perform refresh
      const release = await refreshMutex.acquire()
      try {
        const refreshResult = await baseQuery(
          { url: apiRoutes.auth.refresh, method: 'POST' },
          api,
          extraOptions,
        )
        if (refreshResult.data) {
          api.dispatch(setCredentials(refreshResult.data as AuthResponseTypes))
          // Retry original request with new token
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
          return { error: { status: 401, data: 'Unauthorized' } }
        }
      } finally {
        release()
      }
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Users', 'Project', 'Projects', 'Task', 'Tasks'],
  endpoints: () => ({}),
})
