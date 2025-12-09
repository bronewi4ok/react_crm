import { baseApi } from '@/shared/api/baseApi'
import type { TaskTypes, TasksListResponse, TasksQueryArgs } from './types'

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TasksListResponse, TasksQueryArgs | void>({
      query: (args) => ({ url: 'tasks', params: args ?? {} }),
      providesTags: (result) =>
        result?.data?.length ?
          [
            ...result.data.map(({ id }) => ({ type: 'Task' as const, id })),
            { type: 'Tasks' as const, id: 'LIST' },
          ]
        : [{ type: 'Tasks' as const, id: 'LIST' }],
    }),

    getTaskById: builder.query<TaskTypes, string>({
      query: (id) => `tasks/${id}`,
      providesTags: (_res, _err, id) => [{ type: 'Task', id }],
    }),

    createTask: builder.mutation<TaskTypes, Partial<TaskTypes>>({
      query: (data) => ({ url: 'tasks', method: 'POST', body: data }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),

    updateTask: builder.mutation<
      TaskTypes,
      { id: string } & Partial<TaskTypes>
    >({
      query: ({ id, ...data }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_res, _err, arg) => [
        { type: 'Task', id: arg.id },
        { type: 'Tasks', id: 'LIST' },
      ],
    }),

    deleteTask: builder.mutation<void, string>({
      query: (id) => ({ url: `tasks/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = projectApi
