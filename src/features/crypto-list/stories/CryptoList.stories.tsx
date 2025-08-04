import { type CryptoItemData, CryptoList } from '@/features/crypto-list/CryptoList'
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CryptoList> = {
  title: 'HomeComponents/CryptoList',
  component: CryptoList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100%', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const usdtData: CryptoItemData[] = [
  {
    id: 'usdt-1',
    name: 'USDT',
    symbol: 'USDT',
    amount: '1 290.49 USDT',
    amountInRubles: '110 323.99 ₽',
    iconColor: '#4CAF50'
  },
  {
    id: 'usdt-2',
    name: 'USDT',
    symbol: 'USDT',
    amount: '850.00 USDT',
    amountInRubles: '72 675.00 ₽',
    iconColor: '#4CAF50'
  },
  {
    id: 'usdt-3',
    name: 'USDT',
    symbol: 'USDT',
    amount: '2 500.75 USDT',
    amountInRubles: '213 814.13 ₽',
    iconColor: '#4CAF50'
  }
];

export const OnlyUSDT: Story = {
  args: {
    cryptos: usdtData,
    onCryptoClick: (crypto) => {
      console.log('Clicked USDT:', crypto);
    }
  }
};