import VkusvillImage from '@images/vkusvill.png'
import ReferralImage from '@images/referral.png'

export interface NotificationProps {
  id: string;
  title: string;
  description: string;
  date: string;
  isRead?: boolean;
  imageUrl?: string;
  onClick?: (id: string) => void;
}

export const mockNotifications: NotificationProps[] = [
  {
    id: '1',
    title: 'Вкусный партнёр сервиса',
    description: 'Кошелёк + ВкусВилл = бонусы, скидки и приятные сюрпризы...',
    date: '26 Октября',
    isRead: false,
    imageUrl: VkusvillImage,
  },
  {
    id: '2',
    title: 'Время приглашать друзей!',
    description: 'У нас теперь есть реферальная программа...',
    date: '5 Мая',
    isRead: true,
    imageUrl: ReferralImage,
  },
];
