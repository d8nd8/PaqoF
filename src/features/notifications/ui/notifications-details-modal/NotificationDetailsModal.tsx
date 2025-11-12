import React from 'react';
import { useTranslation } from 'react-i18next';
import { FullscreenModal } from '@/shared/ui/fullscreen-modal/FullscreenModal';
import * as S from './NotificationDetailsModal.styled';
import { useSafeAreaInsets } from '@/shared/hooks/useSafeAreaInsets'

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
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();

  return (
    <FullscreenModal
      isOpen={isOpen}
      title={notification ? t(notification.date) : ''}
      onClose={onClose}
    >
      {notification && (
        <S.NotificationContainer>
          <S.NotificationWrapper>
            {notification.imageUrl && (
              <S.NotificationImage
                src={notification.imageUrl}
                alt={t(notification.title)}
              />
            )}
            <S.NotificationTitle>{t(notification.title)}</S.NotificationTitle>
            <S.NotificationText>{t(notification.text)}</S.NotificationText>
          </S.NotificationWrapper>
          {/*<S.ButtonWrapper $insetBottom={bottom}>*/}
          {/*  <S.ActionButton onClick={onClose}>*/}
          {/*    {t('notifications.details.cta')}*/}
          {/*  </S.ActionButton>*/}
          {/*</S.ButtonWrapper>*/}
        </S.NotificationContainer>
      )}
    </FullscreenModal>
  );
};
