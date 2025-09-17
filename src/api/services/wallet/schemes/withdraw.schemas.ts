import { z } from 'zod'

export const WithdrawRequestSchema = z.object({
  address: z.string().min(1, 'Адрес обязателен'),
  amount: z.union([z.number(), z.string().regex(/^\d+(\.\d+)?$/, 'Сумма должна быть числом')]),
})

export type WithdrawRequest = z.infer<typeof WithdrawRequestSchema>
