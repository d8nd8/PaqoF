import React from 'react';
import * as S from './Notification.styled';
import type { NotificationProps } from '@/features/notifications/model/mockNotifications';
import { useTranslation } from "react-i18next";

export const Notification: React.FC<NotificationProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            date,
                                                            isRead = false,
                                                            imageUrl,
                                                            onClick
                                                          }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <S.NotificationContainer onClick={handleClick} isRead={isRead}>
      <S.NotificationContent>
        <S.NotificationHeader>
          {!isRead && <S.NotificationDot isRead={isRead} />}
          <S.NotificationTitle>{t(title)}</S.NotificationTitle>
          <S.NotificationDate>{t(date)}</S.NotificationDate>
        </S.NotificationHeader>

        <S.NotificationBody>
          <S.NotificationDescription>{t(description)}</S.NotificationDescription>

          {imageUrl && (
            <S.NotificationImage src={imageUrl} alt={t(title)} />
          )}
        </S.NotificationBody>
      </S.NotificationContent>
    </S.NotificationContainer>
  );
};
