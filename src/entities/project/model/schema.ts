import z from 'zod'

export const ProjectSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, "Назва обов'язкова"),
  specialization: z.string(),
  description: z.string(),
  budget: z.number().nonnegative(),
  tasks: z.array(z.string()),
  clients: z.array(z.string()),
  taskers: z.array(z.string()),
  createdAt: z.iso.datetime(),
  finishedAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime(),
  avatar: z.string(),
  abbreviation: z.string(),
})

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const UpdateProjectSchema = CreateProjectSchema.partial()

export type ProjectTypes = z.infer<typeof ProjectSchema>
export type CreateProjectTypes = z.infer<typeof CreateProjectSchema>
export type UpdateProjectTypes = z.infer<typeof UpdateProjectSchema>
