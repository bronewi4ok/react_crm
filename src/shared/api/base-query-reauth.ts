import { logout, setCredentials } from '@entities/auth'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { AuthResponseTypes } from '@shared/auth'
import { refreshMutex } from '@shared/lib'
import { baseQuery, refreshBaseQuery } from './base-query'
import { API_ROUTES } from './config'

type BaseQueryArgsTypes = string | FetchArgs
type BaseQueryTypes = BaseQueryFn<BaseQueryArgsTypes, unknown, FetchBaseQueryError>

const unauthorizedError: FetchBaseQueryError = {
  status: 401,
  data: 'Unauthorized',
}

export const baseQueryWithReauth: BaseQueryTypes = async (args, api, extraOptions) => {
  await refreshMutex.waitForUnlock()
  const result = await baseQuery(args, api, extraOptions)
  if (result.error?.status !== 401) return result
  const argsUrl = typeof args === 'string' ? args : args.url

  if (argsUrl === API_ROUTES.REFRESH) {
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
      { url: API_ROUTES.REFRESH, method: 'POST' },
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
