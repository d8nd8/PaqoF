import React from 'react';

import { FullscreenModal } from '@/shared/ui/fullscreen-modal/FullscreenModal'
import { NotificationList } from '@/features/notifications'
import { mockNotifications } from '@/features/notifications/model/mockNotifications'

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
                                                                        isOpen,
                                                                        onClose,
                                                                      }) => {
  return (
    <FullscreenModal
      isOpen={isOpen}
      title="Уведомления"
      onClose={onClose}
    >
      <NotificationList notifications={mockNotifications} />
    </FullscreenModal>
  );
};
