import { z } from 'zod'

export const ReferralTypeEnum = z.enum(['FIXED_INCOME', 'PERCENTAGE_INCOME'])
export type ReferralType = z.infer<typeof ReferralTypeEnum>

export const SetReferralTypeSchema = z.object({
  referral_type: ReferralTypeEnum,
})
export type SetReferralTypeRequest = z.infer<typeof SetReferralTypeSchema>



export const ReferralInfoSchema = z.object({
  telegram_id: z.number(),
  referred_by: z.number().nullable(),
  code: z.string().nullable(),
  active: z.boolean(),
  referral_type: ReferralTypeEnum.nullable(),
  referral_count: z.number(),
  balance: z.number(),
  referred_users: z.array(z.number()),
})

export type ReferralInfo = z.infer<typeof ReferralInfoSchema>


export const ReferralOperationSchema = z.object({
  referral_operation_id: z.string().uuid(),
  status: z.enum(['confirmed', 'pending', 'cancelled']),
  operation_type: z.enum(['deposit', 'withdraw']),
  amount: z.number(),
  created_at: z.string().datetime(),
})

export type ReferralOperation = z.infer<typeof ReferralOperationSchema>

export const ReferralOperationsResponseSchema = z.object({
  operations: z.array(ReferralOperationSchema),
  total: z.number(),
  limit: z.number().nullable(),
  offset: z.number().nullable(),
})

export type ReferralOperationsResponse = z.infer<
  typeof ReferralOperationsResponseSchema
>