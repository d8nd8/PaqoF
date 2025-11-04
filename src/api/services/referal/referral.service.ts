import {
  ReferralInfoSchema,
  SetReferralTypeSchema,
  type ReferralInfo,
  type ReferralOperationsResponse,
  type SetReferralTypeRequest, ReferralOperationsResponseSchema
} from '@/api/services/referal/schemes/referal.schemas'
import { apiClient } from '@/shared/api';
import type { AxiosRequestConfig } from 'axios';


export const setReferralType = async (
  payload: SetReferralTypeRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.patch('/api/v1/referral/type', payload, {
    requestSchema: SetReferralTypeSchema,
    ...options,
  })
}

export const getReferralInfo = async (
  options?: AxiosRequestConfig,
): Promise<ReferralInfo> => {
  return apiClient.get(
    '/api/v1/referral',
    {},
    {
      model: ReferralInfoSchema,
      ...options,
    },
  )
}

export const getReferralOperations = async (
  params?: { limit?: number; offset?: number },
  options?: AxiosRequestConfig,
): Promise<ReferralOperationsResponse> => {
  return apiClient.get(
    '/api/v1/referral/operations',
    { params },
    {
      model: ReferralOperationsResponseSchema,
      ...options,
    },
  )
}