import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'
import type { TaskTypes, TasksListResponse, TasksQueryArgs } from '../model/types'

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TasksListResponse, TasksQueryArgs | void>({
      query: (args) => ({ url: API_ROUTES.TASKS.LIST, params: args ?? {} }),
      providesTags: (result) =>
        result?.data?.length
          ? [
              ...result.data.map(({ id }) => ({ type: API_TAGS.TASK, id })),
              { type: API_TAGS.TASK, id: API_LIST },
            ]
          : [{ type: API_TAGS.TASK, id: API_LIST }],
    }),

    getTaskById: builder.query<TaskTypes, string>({
      query: (id) => API_ROUTES.TASKS.ITEM(id),
      providesTags: (_res, _err, id) => [{ type: API_TAGS.TASK, id }],
    }),

    createTask: builder.mutation<TaskTypes, Partial<TaskTypes>>({
      query: (data) => ({ url: API_ROUTES.TASKS.LIST, method: 'POST', body: data }),
      invalidatesTags: [{ type: API_TAGS.TASK, id: API_LIST }],
    }),

    updateTask: builder.mutation<TaskTypes, { id: string } & Partial<TaskTypes>>({
      query: ({ id, ...data }) => ({
        url: API_ROUTES.TASKS.ITEM(id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_res, _err, arg) => [
        { type: API_TAGS.TASK, id: arg.id },
        { type: API_TAGS.TASK, id: API_LIST },
      ],
    }),

    deleteTask: builder.mutation<void, string>({
      query: (id) => ({ url: API_ROUTES.TASKS.ITEM(id), method: 'DELETE' }),
      invalidatesTags: [{ type: API_TAGS.TASK, id: API_LIST }],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi
