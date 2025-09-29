import { OperationListSchema, type OperationList } from '@/api/services/operation/schemes/operation.schemas';
import { LoginRequestSchema, type LoginRequest } from '@/api/services/user/schemas/login.schema';
import { apiClient } from '@/shared/api'
import type { AxiosRequestConfig } from 'axios';



import {
  ChangeEntryCodeSchema,
  SetEntryCodeSchema,
  type ChangeEntryCodeRequest,
  type SetEntryCodeRequest
} from './schemas/change-code.schema'


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


export const setEntryCode = async (
  payload: SetEntryCodeRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.post(
    '/api/v1/user/entry_code',
    payload,
    {
      requestSchema: SetEntryCodeSchema,
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