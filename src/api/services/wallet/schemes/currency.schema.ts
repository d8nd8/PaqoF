import { z } from 'zod'

export const WalletCurrencyListSchema = z.object({
  currencies: z.array(z.string()),
})

export type WalletCurrencyList = z.infer<typeof WalletCurrencyListSchema>
