import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'
// import { ProjectSchema, type ProjectTypes, type UpdateProjectTypes } from '../model/schema'
import { type ProjectTypes, type UpdateProjectTypes } from '../model/schema'

export const updateProjectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProject: build.mutation<ProjectTypes, Pick<ProjectTypes, 'id'> & UpdateProjectTypes>({
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
