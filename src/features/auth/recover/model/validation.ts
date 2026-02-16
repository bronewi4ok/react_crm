import { z } from 'zod'

export const recoverSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
})

export const recoverConfirmSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
      .regex(/\d/, 'Password must contain a number'),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'Passwords not match',
  })

export type RecoverFormTypes = z.infer<typeof recoverSchema>
export type RecoverConfirmFormTypes = z.infer<typeof recoverConfirmSchema>
