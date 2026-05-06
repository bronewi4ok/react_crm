import { z } from 'zod'

export const UpdateProjectSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().optional(),
    budget: z.number().nonnegative('The budget must be positive.').optional(),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата у форматі YYYY-MM-DD')
      .optional()
      .or(z.literal('')),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата у форматі YYYY-MM-DD')
      .optional()
      .or(z.literal('')),
  })
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true
      return new Date(data.startDate) <= new Date(data.endDate)
    },
    {
      message: 'Start date cannot be later than end date',
      path: ['endDate'],
    },
  )

export type UpdateProjectTypes = z.infer<typeof UpdateProjectSchema>
