import { z } from 'zod'

export const WebhookSchema = z.object({
  txId: z.string(),
  fromAddress: z.string(),
  toAddress: z.string(),
  amount: z.union([z.number(), z.string()]),
  cryptoType: z.string(),
})

export type WebhookRequest = z.infer<typeof WebhookSchema>
