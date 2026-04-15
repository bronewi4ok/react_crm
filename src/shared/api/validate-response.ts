import { z } from 'zod'

export const validateResponse =
  <T>(schema: z.ZodSchema<T>) =>
  (response: unknown): T => {
    return schema.parse(response)
  }
