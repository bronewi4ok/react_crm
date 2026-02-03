import { SORT_ORDER } from '@/shared/model/sort'
import z from 'zod'
import { projectsSortConfigs } from './configs'

const sortParams = projectsSortConfigs.map((item) => item.key)

export const projectsSortSchema = z
  .object({
    sort: z.enum(sortParams).optional(),
    order: z.enum([SORT_ORDER.ASC, SORT_ORDER.DESC]).optional(),
    page: z.coerce.number().default(1),
    per: z.coerce.number().default(7),
    q: z.string().optional(),
  })
  .refine((data) => !data.order || !!data.sort, { message: 'order without sort is invalid' })
