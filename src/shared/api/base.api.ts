import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './base-query-reauth'
import { API_TAGS } from './config'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: Object.values(API_TAGS),
  endpoints: () => ({}),
})
