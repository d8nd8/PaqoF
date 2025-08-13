import React from 'react';
import { FullscreenModal } from '@/shared/ui/fullscreen-modal/FullscreenModal';
import * as S from './NotificationDetailsModal.styled';

interface NotificationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: {
    date: string;
    title: string;
    text: string;
    imageUrl?: string;
  } | null;
}

export const NotificationDetailsModal: React.FC<NotificationDetailsModalProps> = ({
                                                                                    isOpen,
                                                                                    onClose,
                                                                                    notification,
                                                                                  }) => {
  return (
    <FullscreenModal
      isOpen={isOpen}
      title={notification?.date || ''}
      onClose={onClose}
    >
      {notification && (
        <S.NotificationContainer>
          <S.NotificationWrapper>
            <S.NotificationImage src={notification.imageUrl || undefined} alt={notification.title} />
            <S.NotificationTitle>{notification.title}</S.NotificationTitle>
            <S.NotificationText>{notification.text}</S.NotificationText>
          </S.NotificationWrapper>
          <S.ButtonWrapper>
            <S.ActionButton onClick={onClose}>Ознакомиться</S.ActionButton>
          </S.ButtonWrapper>
        </S.NotificationContainer>
      )}
    </FullscreenModal>
  );
};
