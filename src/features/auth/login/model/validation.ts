import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .regex(/\d/, 'Password must contain a number'),
  rememberMe: z.boolean(),
  // .refine((val) => val === true, { message: 'This field is required' }),
})

export type LoginFormTypes = z.infer<typeof loginSchema>
