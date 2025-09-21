import { z } from 'zod';

export const RateSchema = z.object({
  symbol: z.string(),
  close: z.number(),
  baseCurrency: z.string(),
  quoteCurrency: z.string()
});

export type Rate = z.infer<typeof RateSchema>;

export const RatesResponseSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.array(RateSchema)
});

export type RatesResponse = z.infer<typeof RatesResponseSchema>;
