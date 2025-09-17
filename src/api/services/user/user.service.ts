import { LoginRequestSchema, type LoginRequest } from '@/api/services/user/schemas/login.schema';
import { apiClient } from '@/shared/api';
import type { AxiosRequestConfig } from 'axios'

import { type ChangeEntryCodeRequest, ChangeEntryCodeSchema } from './schemas/change-code.schema'
import { type OperationList, OperationListSchema } from '@/api/services/operation/schemes/operation.schemas'


export const login = async (
  payload: LoginRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.post(
    '/api/v1/auth/login',
    payload,
    {
      requestSchema: LoginRequestSchema,
      ...options,
    },
  )
}


export const changeEntryCode = async (
  payload: ChangeEntryCodeRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.patch(
    '/api/v1/user/entry_code',
    payload,
    {
      requestSchema: ChangeEntryCodeSchema,
      ...options,
    },
  )
}


export const getUserOperations = async (
  params?: { limit?: number; offset?: number },
  options?: AxiosRequestConfig,
): Promise<OperationList> => {
  return apiClient.get(
    '/api/v1/user/operations',
    params,
    {
      model: OperationListSchema,
      ...options,
    },
  )
}