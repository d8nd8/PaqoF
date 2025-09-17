import { create } from 'zustand';

import type INotificationStore from './types';
import type { INotification } from './types';

const useNotificationStore = create<INotificationStore>((set, get) => ({
  notifications: [],
  show: (notification: INotification) => {
    set({
      notifications: [...get().notifications, notification],
    });

    setTimeout(() => {
      get().hide(notification);
    }, 3000);
  },
  hide: (notification: INotification) => {
    set({
      notifications: get().notifications.filter((n: INotification) => n !== notification),
    });
  },
}));

export default useNotificationStore;
