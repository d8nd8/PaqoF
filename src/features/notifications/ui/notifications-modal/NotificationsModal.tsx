import React from 'react';
import { FullscreenModal } from '@/shared/ui/fullscreen-modal/FullscreenModal'
import { NotificationList } from '@/features/notifications'
import { mockNotifications } from '@/features/notifications/model/mockNotifications'
import { useTranslation } from "react-i18next";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
                                                                        isOpen,
                                                                        onClose,
                                                                      }) => {
  const { t } = useTranslation();

  return (
    <FullscreenModal
      isOpen={isOpen}
      title={t("notifications.title")}
      onClose={onClose}
    >
      <NotificationList notifications={mockNotifications} />
    </FullscreenModal>
  );
};
