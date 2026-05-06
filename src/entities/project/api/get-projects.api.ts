import { API_LIST, API_ROUTES, API_TAGS, baseApi } from '@shared/api'
import type { ProjectsRequestTypes, ProjectsResponseTypes } from '../model/types'

export const getProjectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<ProjectsResponseTypes, ProjectsRequestTypes | void>({
      query: (params) => ({ url: API_ROUTES.PROJECTS.LIST, params: params ?? {} }),
      providesTags: (result) =>
        result?.data?.length
          ? [
              ...result.data.map(({ id }) => ({ type: API_TAGS.PROJECT, id })),
              { type: API_TAGS.PROJECT, id: API_LIST },
            ]
          : [{ type: API_TAGS.PROJECT, id: API_LIST }],
    }),
  }),
})

export const { useGetProjectsQuery } = getProjectsApi

export type GetProjectsQueryTypes = ReturnType<typeof useGetProjectsQuery>
export type GetProjectsRefetchTypes = GetProjectsQueryTypes['refetch']
