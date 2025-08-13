import React from 'react';
import * as S from './Notification.styled';

export interface NotificationProps {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string | React.ReactNode;
  iconBackgroundColor?: string;
  isRead?: boolean;
  onClick?: (id: string) => void;
}

export const Notification: React.FC<NotificationProps> = ({
                                                            id,
                                                            title,
                                                            description,
                                                            date,
                                                            icon,
                                                            iconBackgroundColor = '#4CAF50',
                                                            isRead = false,
                                                            onClick
                                                          }) => {
  const handleClick = () => {
    onClick?.(id);
  };

  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    return <S.NotificationIconText>{icon}</S.NotificationIconText>;
  };

  return (
    <S.NotificationContainer onClick={handleClick} isRead={isRead}>
      <S.NotificationContent>
        <S.NotificationHeader>
          <S.NotificationDot isRead={isRead} />
          <S.NotificationTitle>{title}</S.NotificationTitle>
          <S.NotificationDate>{date}</S.NotificationDate>
        </S.NotificationHeader>

        <S.NotificationBody>
          <S.NotificationDescription>
            {description}
          </S.NotificationDescription>
          <S.NotificationIcon backgroundColor={iconBackgroundColor}>
            {renderIcon()}
          </S.NotificationIcon>
        </S.NotificationBody>
      </S.NotificationContent>
    </S.NotificationContainer>
  );
};