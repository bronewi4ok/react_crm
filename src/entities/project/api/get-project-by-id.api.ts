import { API_ROUTES, API_TAGS, baseApi } from '@shared/api'
import type { ProjectTypes } from '../model/schema'

export const getProjectByIdApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjectById: build.query<ProjectTypes, string>({
      query: (id) => API_ROUTES.PROJECTS.ITEM(id),
      providesTags: (_res, _err, id) => [{ type: API_TAGS.PROJECT, id }],
    }),
  }),
})

export const { useGetProjectByIdQuery } = getProjectByIdApi
