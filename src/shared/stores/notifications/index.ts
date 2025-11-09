import {
  getNotifications,
  markNotificationsRead,
} from '@/api/services/notifications/notification.service'
import { create } from 'zustand'

import type INotificationsApiStore from './types'
import type { Notification } from '@/api/services/notifications/schemes/notification.schemas'

const useNotificationsApiStore = create<INotificationsApiStore>((set, get) => ({
  notifications: [],
  total: 0,
  unreadCount: 0,
  loading: false,

  fetch: async (limit?: number, offset?: number) => {
    try {
      set({ loading: true })
      const res = await getNotifications({ limit, offset })
      set({
        notifications: res.notifications,
        total: res.total,
        unreadCount: res.unreadCount,
      })
    } finally {
      set({ loading: false })
    }
  },

  markAsRead: async (ids: string[]) => {
    if (!ids.length) return
    await markNotificationsRead({ notificationIds: ids })

    const updated = get().notifications.map((n: Notification) =>
      ids.includes(n.id) ? { ...n, isRead: true } : n,
    )

    set({
      notifications: updated,
      unreadCount: updated.filter((n) => !n.isRead).length,
    })
  },

  clear: () => {
    set({ notifications: [], total: 0, unreadCount: 0 })
  },
}))

export default useNotificationsApiStore
