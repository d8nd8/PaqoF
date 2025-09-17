import { z } from 'zod'

export const WalletAddressSchema = z.object({
  network: z.string(),
  address: z.string(),
})

export const WalletSchema = z.object({
  walletId: z.string().uuid(),
  currency: z.string(),
  balance: z.string(),
  addresses: z.array(WalletAddressSchema),
})

export const WalletListSchema = z.array(WalletSchema)

export type Wallet = z.infer<typeof WalletSchema>
export type WalletList = z.infer<typeof WalletListSchema>