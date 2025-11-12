import { z } from 'zod'

export const NotificationSchema = z.object({
  notificationId: z.string(),
  type: z.enum(['operation_status', 'referral_deposit', 'referral_join']),
  title: z.string(),
  message: z.string(),
  createdAt: z.string(),
  read: z.boolean(),
})

export const NotificationListSchema = z.object({
  notifications: z.array(NotificationSchema),
  total: z.number(),
  unreadCount: z.number(),
  limit: z.number().nullable(),
  offset: z.number().nullable(),
})

export type Notification = z.infer<typeof NotificationSchema>
export type NotificationList = z.infer<typeof NotificationListSchema>

export const MarkNotificationsReadSchema = z.object({
  notificationIds: z.array(z.string()).nonempty(),
})

export type MarkNotificationsReadRequest = z.infer<typeof MarkNotificationsReadSchema>
