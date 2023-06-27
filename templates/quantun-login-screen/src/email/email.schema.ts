import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
      message: 'Password must have at least 1 uppercase, 1 lowercase and 1 number',
    }),
})

export type LoginData = z.infer<typeof loginSchema>
