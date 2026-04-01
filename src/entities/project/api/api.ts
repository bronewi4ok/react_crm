import { API_LIST, API_TAGS } from '@/shared/api'
import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/routes'
import type { ProjectTypes, ProjectsQueryTypes, ProjectsResponseTypes } from '../model/types'

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<ProjectsResponseTypes, ProjectsQueryTypes | void>({
      query: (params) => ({ url: apiRoutes.projects.list, params: params ?? {} }),
      providesTags: (result) =>
        result?.data?.length
          ? [
              ...result.data.map(({ id }) => ({ type: API_TAGS.PROJECT, id })),
              { type: API_TAGS.PROJECT, id: API_LIST },
            ]
          : [{ type: API_TAGS.PROJECT, id: API_LIST }],
    }),

    getProjectById: build.query<ProjectTypes, string>({
      query: (id) => apiRoutes.projects.item(id),
      providesTags: (_res, _err, id) => [{ type: API_TAGS.PROJECT, id }],
    }),

    createProject: build.mutation<ProjectTypes, Partial<ProjectTypes>>({
      query: (body) => ({ url: apiRoutes.projects.list, method: 'POST', body }),
      invalidatesTags: [{ type: API_TAGS.PROJECT, id: API_LIST }],
    }),

    updateProject: build.mutation<ProjectTypes, { id: string } & Partial<ProjectTypes>>({
      query: ({ id, ...body }) => ({
        url: apiRoutes.projects.item(id),
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_res, _err, { id }) => [
        { type: API_TAGS.PROJECT, id },
        { type: API_TAGS.PROJECT, id: API_LIST },
      ],
    }),

    deleteProject: build.mutation<void, string>({
      query: (id) => ({ url: apiRoutes.projects.item(id), method: 'DELETE' }),
      invalidatesTags: (_res, _err, id) => [
        { type: API_TAGS.PROJECT, id },
        { type: API_TAGS.PROJECT, id: API_LIST },
      ],
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi

export type GetProjectsQueryTypes = ReturnType<typeof useGetProjectsQuery>
export type GetProjectsRefetchTypes = GetProjectsQueryTypes['refetch']
