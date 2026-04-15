import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'
import type { ProjectTypes } from '../model/types'

export const updateProjectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProject: build.mutation<ProjectTypes, { id: string } & Partial<ProjectTypes>>({
      query: ({ id, ...body }) => ({
        url: API_ROUTES.PROJECTS.ITEM(id),
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_res, _err, { id }) => [
        { type: API_TAGS.PROJECT, id },
        { type: API_TAGS.PROJECT, id: API_LIST },
      ],
    }),
  }),
})

export const { useUpdateProjectMutation } = updateProjectApi
