import type { RootState } from '@/app/store'
import { logout, setCredentials } from '@/features/auth/api/authSlice'
import { apiRoutes } from '@/shared/config/routes'
import { refreshMutex } from '@/shared/lib/refreshMutex'
import type { AccessTokenTypes, AuthResponseTypes } from '@/shared/types'
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { API_TAGS } from './config'

type BaseQueryArgs = string | FetchArgs
type AppBaseQuery = BaseQueryFn<BaseQueryArgs, unknown, FetchBaseQueryError>

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

const refreshBaseQuery = fetchBaseQuery({
  baseUrl: apiRoutes.baseUrl,
  credentials: 'include',
})

const unauthorizedError: FetchBaseQueryError = {
  status: 401,
  data: 'Unauthorized',
}

const baseQueryWithReauth: AppBaseQuery = async (args, api, extraOptions) => {
  await refreshMutex.waitForUnlock()
  const result = await baseQuery(args, api, extraOptions)
  if (result.error?.status !== 401) return result
  const argsUrl = typeof args === 'string' ? args : args.url

  if (argsUrl === apiRoutes.auth.refresh) {
    api.dispatch(logout())
    return { error: unauthorizedError }
  }

  if (refreshMutex.isLocked()) {
    await refreshMutex.waitForUnlock()
    return await baseQuery(args, api, extraOptions)
  }

  const release = await refreshMutex.acquire()

  try {
    const refreshResult = await refreshBaseQuery(
      { url: apiRoutes.auth.refresh, method: 'POST' },
      api,
      extraOptions,
    )

    if (refreshResult.error) {
      api.dispatch(logout())
      return { error: unauthorizedError }
    }

    api.dispatch(setCredentials(refreshResult.data as AuthResponseTypes))

    return await baseQuery(args, api, extraOptions)
  } finally {
    release()
  }
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: Object.values(API_TAGS),
  endpoints: () => ({}),
})
