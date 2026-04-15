import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteProject: build.mutation<void, string>({
      query: (id) => ({ url: API_ROUTES.PROJECTS.ITEM(id), method: 'DELETE' }),
      invalidatesTags: (_res, _err, id) => [
        { type: API_TAGS.PROJECT, id },
        { type: API_TAGS.PROJECT, id: API_LIST },
      ],
    }),
  }),
})
export const { useDeleteProjectMutation } = projectApi
