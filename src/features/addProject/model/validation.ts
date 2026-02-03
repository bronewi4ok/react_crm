import { z } from 'zod'

export const addProjectSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  budget: z.number().positive('The budget must be positive.').optional(),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата у форматі YYYY-MM-DD')
    .optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата у форматі YYYY-MM-DD')
    .optional(),
})

export type addProjectTypes = z.infer<typeof addProjectSchema>
