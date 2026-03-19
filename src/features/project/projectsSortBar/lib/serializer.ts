import { createSerializer } from 'nuqs'
import { projectsQueryKeys, projectsQuerySchema } from './schema'

export const projectsQuerySerializer = createSerializer(projectsQuerySchema, {
  urlKeys: projectsQueryKeys,
})
