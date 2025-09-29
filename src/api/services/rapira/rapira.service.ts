import { type Rate, RateSchema } from '@/api/services/rapira/schemes/rates.schema'
import { apiClient } from '@/shared/api';
import type { AxiosRequestConfig } from 'axios';






export const getRates = async (
  params?: { currency?: string },
  options?: AxiosRequestConfig,
): Promise<Rate> => {
  return apiClient.get(
    '/api/v1/rates',
    params,
    {
      model: RateSchema,
      ...options,
    },
  )
}