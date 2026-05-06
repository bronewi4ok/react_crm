import z from 'zod'

export const ProjectSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  specialization: z.string(),
  description: z.string(),
  budget: z.number().nonnegative(),
  tasks: z.array(z.string()),
  clients: z.array(z.string()),
  taskers: z.array(z.string()),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  finishedAt: z.iso.datetime().nullable(),
  startDate: z.iso
    .date()
    .nullable()
    .or(z.literal('').transform(() => null)),
  endDate: z.iso
    .date()
    .nullable()
    .or(z.literal('').transform(() => null)),
  avatar: z.string(),
  abbreviation: z.string(),
})

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  finishedAt: true,
}).partial()

export const UpdateProjectSchema = CreateProjectSchema

export type ProjectTypes = z.infer<typeof ProjectSchema>
export type CreateProjectTypes = z.infer<typeof CreateProjectSchema>
export type UpdateProjectTypes = z.infer<typeof UpdateProjectSchema>
