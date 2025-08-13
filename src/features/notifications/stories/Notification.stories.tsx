import { type Meta, type StoryObj } from '@storybook/react-vite'



import { NotificationList } from '../ui/notification-list/NotificationList'
import type { NotificationProps } from '@/features/notifications'


const meta: Meta<typeof NotificationList> = {
  title: 'Notifications/NotificationList',
  component: NotificationList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto', backgroundColor: '#C8A2C8', padding: '20px', minHeight: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNotifications: NotificationProps[] = [
  {
    id: 'notification-1',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat nulla, laoreet at ante nec, suscipit imperdiet tortor. Morbi...',
    date: '26 Октября',
    icon: 'BB',
    iconBackgroundColor: '#4CAF50',
    isRead: false
  },
  {
    id: 'notification-2',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat nulla, laoreet at ante nec, suscipit imperdiet tortor. Morbi...',
    date: '26 Октября',
    icon: 'BB',
    iconBackgroundColor: '#4CAF50',
    isRead: true
  }
];

const multipleNotifications: NotificationProps[] = [
  {
    id: 'notification-1',
    title: 'Новое сообщение',
    description: 'У вас есть новое сообщение от команды поддержки. Пожалуйста, проверьте ваш почтовый ящик для получения подробной информации.',
    date: '26 Октября',
    icon: '✉️',
    iconBackgroundColor: '#007AFF',
    isRead: false
  },
  {
    id: 'notification-2',
    title: 'Обновление системы',
    description: 'Система будет обновлена завтра в 3:00 утра. Ожидаемое время простоя составляет 30 минут.',
    date: '25 Октября',
    icon: '⚙️',
    iconBackgroundColor: '#FF9500',
    isRead: true
  },
  {
    id: 'notification-3',
    title: 'Баланс пополнен',
    description: 'Ваш баланс успешно пополнен на 1000 рублей. Спасибо за использование наших услуг!',
    date: '24 Октября',
    icon: '💰',
    iconBackgroundColor: '#34C759',
    isRead: false
  },
  {
    id: 'notification-4',
    title: 'Безопасность аккаунта',
    description: 'Обнаружен вход в ваш аккаунт с нового устройства. Если это были не вы, немедленно смените пароль.',
    date: '23 Октября',
    icon: '🔒',
    iconBackgroundColor: '#FF3B30',
    isRead: true
  }
];

export const Default: Story = {
  args: {
    notifications: sampleNotifications,
    onNotificationClick: (id) => {
      console.log('Clicked notification ID:', id);
    }
  }
};

export const SingleNotification: Story = {
  args: {
    notifications: [sampleNotifications[0]],
    onNotificationClick: (id) => {
      console.log('Single notification clicked ID:', id);
    }
  }
};

export const ReadNotification: Story = {
  args: {
    notifications: [sampleNotifications[1]],
    onNotificationClick: (id) => {
      console.log('Read notification clicked ID:', id);
    }
  }
};

export const MultipleNotifications: Story = {
  args: {
    notifications: multipleNotifications,
    onNotificationClick: (id) => {
      console.log('Multiple notifications clicked ID:', id);
    }
  }
};

export const EmptyList: Story = {
  args: {
    notifications: [],
  }
};