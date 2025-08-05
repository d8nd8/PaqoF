import React from 'react';
import { Notification, type NotificationProps } from './Notification';
import * as S from './NotificationList.styled';

export interface NotificationListProps {
  notifications: NotificationProps[];
  onNotificationClick?: (id: string) => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
                                                                    notifications,
                                                                    onNotificationClick
                                                                  }) => {
  if (notifications.length === 0) {
    return (
      <S.NotificationListContainer>
        <S.EmptyState>Нет уведомлений</S.EmptyState>
      </S.NotificationListContainer>
    );
  }

  return (
    <S.NotificationListContainer>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClick={onNotificationClick}
        />
      ))}
    </S.NotificationListContainer>
  );
};