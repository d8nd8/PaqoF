import { z } from 'zod'


export const SbpPaymentCreateSchema = z.object({
  sbpUrl: z.string().url().max(2083, 'URL слишком длинный'),
  exchange: z.union([z.number(), z.string()]),
})

export type SbpPaymentCreateRequest = z.infer<typeof SbpPaymentCreateSchema>


export const SbpPaymentResponseSchema = z.object({
  sbpPaymentId: z.string().uuid(),
  rubAmount: z.number().int(),
  feeRub: z.number().int(),
  totalAmountRub: z.number().int(),
  cryptoAmount: z.string(),
  feeCrypto: z.string(),
  totalAmountCrypto: z.string(),
  exchange: z.union([z.number(), z.string()]),
  status: z.string(),
  createdAt: z.string().datetime(),
})

export type SbpPaymentResponse = z.infer<typeof SbpPaymentResponseSchema>
