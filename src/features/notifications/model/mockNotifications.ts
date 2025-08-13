import type { NotificationProps } from '@/features/notifications'


export const mockNotifications: NotificationProps[] = [
  {
    id: '1',
    title: 'Вкусный партнёр сервиса',
    description: 'Кошелёк + ВкусВилл = бонусы, скидки и приятные сюрпризы...',
    date: '26 Октября',
    icon: 'BB',
    iconBackgroundColor: '#4CAF50',
    isRead: false,
  },
  {
    id: '2',
    title: 'Время приглашать друзей!',
    description: 'У нас теперь есть реферальная программа...',
    date: '5 Мая',
    icon: '🥓',
    iconBackgroundColor: '#3A86FF',
    isRead: true,
  },
];
