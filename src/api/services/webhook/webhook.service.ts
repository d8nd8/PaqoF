import type { AxiosRequestConfig } from 'axios'
import { apiClient } from '@/shared/api'
import { type WebhookRequest, WebhookSchema } from '@/api/services/webhook/schemes/webhook.schemas'



export const sendWebhook = async (
  payload: WebhookRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.post(
    '/api/v1/webhook',
    payload,
    {
      requestSchema: WebhookSchema,
      ...options,
    },
  )
}