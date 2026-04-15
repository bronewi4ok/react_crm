import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AccessTokenStateTypes, AccessTokenTypes } from '@shared/auth'
import { API_ROUTES } from './config'

export const baseQuery = fetchBaseQuery({
  baseUrl: API_ROUTES.BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as AccessTokenStateTypes
    const token: AccessTokenTypes = state.auth.accessToken

    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  },
})

export const refreshBaseQuery = fetchBaseQuery({
  baseUrl: API_ROUTES.BASE_URL,
  credentials: 'include',
})
