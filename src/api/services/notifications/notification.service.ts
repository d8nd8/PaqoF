import {
  MarkNotificationsReadSchema,
  NotificationListSchema,
  type MarkNotificationsReadRequest,
  type NotificationList,
} from '@/api/services/notifications/schemes/notification.schemas'
import { apiClient } from '@/shared/api'
import type { AxiosRequestConfig } from 'axios'

export const getNotifications = async (
  params?: { limit?: number; offset?: number },
  options?: AxiosRequestConfig,
): Promise<NotificationList> => {
  return apiClient.get('/api/v1/notifications', params, {
    model: NotificationListSchema,
    ...options,
  })
}

export const markNotificationsRead = async (
  payload: MarkNotificationsReadRequest,
  options?: AxiosRequestConfig,
): Promise<void> => {
  return apiClient.post('/api/v1/notifications/read', payload, {
    requestSchema: MarkNotificationsReadSchema,
    ...options,
  })
}
