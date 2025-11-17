import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .regex(/\d/, 'Password must contain a number'),
  terms: z
    .boolean()
    .refine((val) => val === true, { message: 'This field is required' }),
})

export type SignupFormTypes = z.infer<typeof signupSchema>
