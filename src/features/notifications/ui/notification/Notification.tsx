import React from 'react';
import * as S from './Notification.styled';
import type { NotificationProps } from '@/features/notifications/model/mockNotifications';

export const Notification: React.FC<NotificationProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            date,
                                                            isRead = false,
                                                            imageUrl,
                                                            onClick
                                                          }) => {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <S.NotificationContainer onClick={handleClick} isRead={isRead}>
      <S.NotificationContent>
        <S.NotificationHeader>
          {!isRead && <S.NotificationDot isRead={isRead} />}
          <S.NotificationTitle>{title}</S.NotificationTitle>
          <S.NotificationDate>{date}</S.NotificationDate>
        </S.NotificationHeader>

        <S.NotificationBody>
          <S.NotificationDescription>{description}</S.NotificationDescription>

          {imageUrl && (
            <S.NotificationImage src={imageUrl} alt={title} />
          )}
        </S.NotificationBody>
      </S.NotificationContent>
    </S.NotificationContainer>
  );
};
