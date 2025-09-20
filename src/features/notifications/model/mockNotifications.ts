import VkusvillImage from '@images/vkusvill.png'
import VkusvillDetailedImage from '@images/vkusvill-detailed.png'
import ReferralImage from '@images/referral.png'

export interface NotificationProps {
  id: string;
  title: string;
  description: string;
  date: string;
  isRead?: boolean;
  imageUrl?: string;
  detailImageUrl?: string;
  onClick?: (id: string) => void;
}

export const mockNotifications: NotificationProps[] = [
  {
    id: '1',
    title: 'notifications.list.partner.title',
    description: 'notifications.list.partner.description',
    date: 'notifications.dates.oct26',
    isRead: false,
    imageUrl: VkusvillImage,
    detailImageUrl: VkusvillDetailedImage,
  },
  {
    id: '2',
    title: 'notifications.list.referral.title',
    description: 'notifications.list.referral.description',
    date: 'notifications.dates.may5',
    isRead: true,
    imageUrl: ReferralImage,
    detailImageUrl: VkusvillDetailedImage,
  },
];