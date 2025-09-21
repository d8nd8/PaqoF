import {type Rate, RatesResponseSchema } from './schemes/rates.schema';
import { rapiraClient } from '@/shared/api/rapira.client';

export const getRates = async (): Promise<Rate[]> => {
  const parsed = await rapiraClient.get('/open/market/rates', RatesResponseSchema);
  return parsed.data;
};