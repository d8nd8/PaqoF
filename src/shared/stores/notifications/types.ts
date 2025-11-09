import type { Notification } from '@/api/services/notifications/schemes/notification.schemas'

export default interface INotificationsApiStore {
  notifications: Notification[]
  total: number
  unreadCount: number
  loading: boolean

  fetch: (limit?: number, offset?: number) => Promise<void>
  markAsRead: (ids: string[]) => Promise<void>
  clear: () => void
}
