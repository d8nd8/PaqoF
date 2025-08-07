import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReferralList } from '@/features/referral-list/ReferralList';
import { type ReferralItemData } from '@/features/referral-list/ReferralItem';

const meta: Meta<typeof ReferralList> = {
  title: 'PaqogochiComponents/ReferralList',
  component: ReferralList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100%', margin: '0 auto', backgroundColor: '#C8A2C8', minHeight: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleReferrals: ReferralItemData[] = [
  {
    id: '1',
    username: '@buffyhunter',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6471184?w=100&h=100&fit=crop&crop=face',
    level: 5,
    earnings: '+100 000.4 USDT'
  },
  {
    id: '2',
    username: '@bountyeater',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    level: 3,
    earnings: '+415.45 USDT'
  },
  {
    id: '3',
    username: '@eclair',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    level: 1,
    earnings: '+43.8 USDT'
  },
  {
    id: '4',
    username: '@valeriymhishenko',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    level: 2,
    earnings: '+2 USDT'
  }
];

export const Default: Story = {
  args: {
    emptyReferrals: {
      title: 'Рефералы',
      count: 0,
      emptyText: 'У вас пока нет рефералов'
    },
    activeReferrals: {
      title: 'Рефералы',
      count: 105,
      referrals: sampleReferrals
    },
    onReferralClick: (referral) => {
      console.log('Clicked referral:', referral);
    }
  }
};