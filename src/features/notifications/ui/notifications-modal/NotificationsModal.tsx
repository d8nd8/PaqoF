import React, { useEffect } from 'react'
import { FullscreenModal } from '@/shared/ui/fullscreen-modal/FullscreenModal'
import { NotificationList } from '@/features/notifications'
import { useTranslation } from 'react-i18next'
import useNotificationsApiStore from '@/shared/stores/notifications'

interface NotificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
                                                                        isOpen,
                                                                        onClose,
                                                                      }) => {
  const { t } = useTranslation()
  const { notifications, fetch, loading, markAsRead } = useNotificationsApiStore()

  useEffect(() => {
    if (isOpen) fetch()
  }, [isOpen, fetch])

  const handleNotificationClick = (id: string) => {
    markAsRead([id])
  }

  return (
    <FullscreenModal
      isOpen={isOpen}
      title={t('notifications.title')}
      onClose={onClose}
    >
      {loading ? (
        <div/>
      ) : (
        <NotificationList
          notifications={notifications.map((n) => ({
            id: n.notificationId,
            title: n.title,
            description: n.message || '',
            date: new Date(n.createdAt).toLocaleDateString(),
            isRead: n.read,
            imageUrl: undefined,
          }))}
          onNotificationClick={handleNotificationClick}
        />
      )}
    </FullscreenModal>
  )
}
