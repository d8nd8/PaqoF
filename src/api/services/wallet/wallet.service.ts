import { OperationListSchema, OperationSchema, type Operation, type OperationList } from '@/api/services/operation/schemes/operation.schemas';
import { WalletListSchema, WalletSchema, type Wallet, type WalletList } from '@/api/services/wallet/schemes/wallet.schemas';
import { apiClient } from '@/shared/api';
import type { AxiosRequestConfig } from 'axios';



import {
  SbpPaymentCreateSchema,
  SbpPaymentResponseSchema,
  type SbpPaymentResponse, type SbpPaymentCreateRequest
} from './schemes/payment.schema'
import { WithdrawRequestSchema, type WithdrawRequest } from './schemes/withdraw.schemas';
import { type WalletCurrencyList, WalletCurrencyListSchema } from '@/api/services/wallet/schemes/currency.schema'


export const getWalletCurrencies = async (
  options?: AxiosRequestConfig,
): Promise<WalletCurrencyList> => {
  return apiClient.get(
    '/api/v1/wallet/currencies',
    {},
    {
      model: WalletCurrencyListSchema,
      ...options,
    },
  )
}

export const getWallets = async (
  options?: AxiosRequestConfig,
): Promise<WalletList> => {
  return apiClient.get(
    '/api/v1/wallet',
    {},
    {
      model: WalletListSchema,
      ...options,
    },
  )
}

export const getWalletById = async (
  walletId: string,
  options?: AxiosRequestConfig,
): Promise<Wallet> => {
  return apiClient.get(
    `/api/v1/wallet/${walletId}`,
    {},
    {
      model: WalletSchema,
      ...options,
    },
  )
}

export const withdrawFromWallet = async (
  walletId: string,
  payload: WithdrawRequest,
  options?: AxiosRequestConfig,
): Promise<Operation> => {
  return apiClient.post(
    `/api/v1/wallet/${walletId}/withdrawal`,
    payload,
    {
      requestSchema: WithdrawRequestSchema,
      model: OperationSchema,
      ...options,
    },
  )
}

export const getWalletOperations = async (
  walletId: string,
  params?: { limit?: number; offset?: number },
  options?: AxiosRequestConfig,
): Promise<OperationList> => {
  return apiClient.get(
    `/api/v1/wallet/${walletId}/operations`,
    params,
    {
      model: OperationListSchema,
      ...options,
    },
  )
}


export const createSbpPayment = async (
  walletId: string,
  payload: SbpPaymentCreateRequest,
  options?: AxiosRequestConfig,
): Promise<SbpPaymentResponse> => {
  return apiClient.post(
    `/api/v1/wallet/${walletId}/one-pay`,
    payload,
    {
      requestSchema: SbpPaymentCreateSchema,
      model: SbpPaymentResponseSchema,
      ...options,
    },
  )
}