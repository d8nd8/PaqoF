export interface INotification {
  type: 'error';
  title: string;
  message: string;
}

export default interface INotificationStore {
  notifications: INotification[];
  show: (notification: INotification) => void;
  hide: (notification: INotification) => void;
}
