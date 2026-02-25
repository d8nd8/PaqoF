import { z } from 'zod'

export const AmlStatusSchema = z
  .string()
  .nullable()
  .optional()
  .transform((v): AmlStatus | undefined => {
    if (!v) return undefined
    const lower = v.toLowerCase()
    if (['pending', 'completed', 'suspicious', 'failed'].includes(lower)) {
      return lower as AmlStatus
    }
    return undefined
  })
export type AmlStatus = 'pending' | 'completed' | 'suspicious' | 'failed'

export const OperationSchema = z.object({
  operationId: z.string().uuid(),
  walletId: z.string().uuid(),
  operationType: z.enum(['deposit', 'withdraw']),
  status: z.string(),
  amount: z.string(),
  fee: z.string(),
  totalAmount: z.string(),
  createdAt: z.string(),
  txId: z.string().nullable().optional(),
  network: z.string().nullable().optional(),
  explorerUrl: z.string().nullable().optional(),
  fromAddress: z.string().nullable().optional(),
  amlStatus: AmlStatusSchema.nullable().optional(),
})

export type Operation = z.infer<typeof OperationSchema>

export const OperationListSchema = z.array(OperationSchema)
export type OperationList = z.infer<typeof OperationListSchema>
