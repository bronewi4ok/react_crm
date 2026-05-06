import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'

export const deleteProjectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteProject: build.mutation<void, string>({
      query: (id) => ({ url: API_ROUTES.PROJECTS.ITEM(id), method: 'DELETE' }),
      invalidatesTags: (error) => (error ? [] : [{ type: API_TAGS.PROJECT, id: API_LIST }]),
    }),
  }),
})
export const { useDeleteProjectMutation } = deleteProjectApi
