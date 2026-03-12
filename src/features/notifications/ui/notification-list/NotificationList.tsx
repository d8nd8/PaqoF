import React, { useState } from 'react'
import { Notification } from '@/features/notifications'
import type { NotificationProps } from '@/features/notifications/model/mockNotifications'
import { NotificationDetailsModal } from '@/features/notifications/ui/notifications-details-modal/NotificationDetailsModal'
import { useTranslation } from 'react-i18next'

import * as S from './NotificationList.styled'

export interface NotificationListProps {
  notifications: NotificationProps[]
  onNotificationClick?: (id: string) => void
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationClick,
}) => {
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationProps | null>(null)

  const { t } = useTranslation()

  const handleNotificationClick = (notification: NotificationProps) => {
    setSelectedNotification(notification)
    onNotificationClick?.(notification.id)
  }

  const handleCloseModal = () => {
    setSelectedNotification(null)
  }

  return (
    <S.NotificationListContainer>
      {notifications.length === 0 ? (
        <S.EmptyState>{t('notifications.empty')}</S.EmptyState>
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            onClick={() => handleNotificationClick(notification)}
          />
        ))
      )}

      <NotificationDetailsModal
        isOpen={!!selectedNotification}
        onClose={handleCloseModal}
        notification={
          selectedNotification
            ? {
                date: selectedNotification.date,
                title: selectedNotification.title,
                text: selectedNotification.description,
                imageUrl: selectedNotification.detailImageUrl,
              }
            : null
        }
      />
    </S.NotificationListContainer>
  )
}
