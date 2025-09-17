import { z } from 'zod'

export const OperationSchema = z.object({
  operationId: z.string().uuid(),
  walletId: z.string().uuid(),
  operationType: z.string(),
  status: z.string(),
  amount: z.string(),
  fee: z.string(),
  totalAmount: z.string(),
  createdAt: z.string().datetime(),
})

export type Operation = z.infer<typeof OperationSchema>

export const OperationListSchema = z.array(OperationSchema)
export type OperationList = z.infer<typeof OperationListSchema>
