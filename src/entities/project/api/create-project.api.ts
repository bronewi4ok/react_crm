import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'
import type { ProjectTypes } from '../model/schema'

export const createProjectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation<ProjectTypes, Partial<ProjectTypes>>({
      query: (body) => ({
        url: API_ROUTES.PROJECTS.LIST,
        method: 'POST',
        body,
      }),

      invalidatesTags: (_, error) => (error ? [] : [{ type: API_TAGS.PROJECT, id: API_LIST }]),
    }),
  }),
})

export const { useCreateProjectMutation } = createProjectApi
