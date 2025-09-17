import { z } from 'zod'

export const LoginRequestSchema = z.object({
  entryCode: z.string().length(4, 'Код должен содержать 4 символа'),
  telegramId: z.number().int().positive(),
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>
