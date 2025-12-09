import { baseApi } from '@/shared/api/baseApi'
import type {
  ProjectTypes,
  ProjectsListResponse,
  ProjectsQueryArgs,
} from './types'

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsListResponse, ProjectsQueryArgs | void>({
      query: (args) => ({ url: 'projects', params: args ?? {} }),
      providesTags: (result) =>
        result?.data?.length ?
          [
            ...result.data.map(({ id }) => ({ type: 'Project' as const, id })),
            { type: 'Projects' as const, id: 'LIST' },
          ]
        : [{ type: 'Projects' as const, id: 'LIST' }],
    }),

    getProjectById: builder.query<ProjectTypes, string>({
      query: (id) => `projects/${id}`,
      providesTags: (_res, _err, id) => [{ type: 'Project', id }],
    }),

    createProject: builder.mutation<ProjectTypes, Partial<ProjectTypes>>({
      query: (data) => ({ url: 'projects', method: 'POST', body: data }),
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),

    updateProject: builder.mutation<
      ProjectTypes,
      { id: string } & Partial<ProjectTypes>
    >({
      query: ({ id, ...data }) => ({
        url: `projects/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_res, _err, arg) => [
        { type: 'Project', id: arg.id },
        { type: 'Projects', id: 'LIST' },
      ],
    }),

    deleteProject: builder.mutation<void, string>({
      query: (id) => ({ url: `projects/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
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
