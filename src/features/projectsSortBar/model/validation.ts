import z from 'zod'

export const projectsSortSchema = z
  .object({
    sort: z.enum(['name', 'tasks', 'budget', 'dueDate', 'members']).optional(),
    order: z.enum(['asc', 'desc']).optional(),
    page: z.coerce.number().default(1),
    per: z.coerce.number().default(7),
    q: z.string().optional(),
  })
  .refine((data) => !data.order || !!data.sort, { message: 'order without sort is invalid' })
