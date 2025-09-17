import type { AxiosRequestConfig } from 'axios';



import { type Operation, OperationSchema } from './schemes/operation.schemas'
import { apiClient } from '@/shared/api'


export const getOperationById = async (
  operationId: string,
  options?: AxiosRequestConfig,
): Promise<Operation> => {
  return apiClient.get(
    `/api/v1/operations/${operationId}`,
    {},
    {
      model: OperationSchema,
      ...options,
    },
  )
}