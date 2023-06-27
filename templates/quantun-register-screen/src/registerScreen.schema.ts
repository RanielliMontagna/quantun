import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
        message: 'Password must have at least 1 uppercase, 1 lowercase and 1 number',
      }),
    confirmPassword: z
      .string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
        message: 'Password must have at least 1 uppercase, 1 lowercase and 1 number',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export type RegisterData = z.infer<typeof registerSchema>
