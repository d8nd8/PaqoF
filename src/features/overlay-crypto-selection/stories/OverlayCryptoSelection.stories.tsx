import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'
import { OverlayCryptoSelection } from '@/features/overlay-crypto-selection'
import type { CryptoItemData } from '@/features/crypto-list/CryptoList'

const meta: Meta<typeof OverlayCryptoSelection> = {
  title: 'ExternalWallet/OverlayCryptoSelection',
  component: OverlayCryptoSelection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100%', margin: '0 auto', backgroundColor: '#C8A2C8', padding: '20px', minHeight: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCryptos: CryptoItemData[] = [
  {
    id: 'usdt-1',
    name: 'USDT',
    symbol: 'USDT',
    amount: '1 290.53 USDT',
    amountInRubles: '110 323.99 ₽',
    iconColor: '#4CAF50'
  },
  {
    id: 'toncoin-1',
    name: 'Toncoin',
    symbol: 'TON',
    amount: '590.00 TON',
    amountInRubles: '144 426.19 ₽',
    icon: '◆',
    iconColor: '#0088CC'
  },
  {
    id: 'bitcoin-1',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '0.18234 BTC',
    amountInRubles: '34 880.61 ₽',
    icon: '₿',
    iconColor: '#F7931A'
  }
];

const InteractiveOverlay = ({ initialSelected }: { initialSelected?: string }) => {
  const [selectedCryptoId, setSelectedCryptoId] = useState<string | undefined>(initialSelected);
  const [isOpen, setIsOpen] = useState(true);

  const handleCryptoSelect = (crypto: CryptoItemData) => {
    console.log('🎉 Selected crypto:', crypto);
    setSelectedCryptoId(crypto.id);
  };

  const handleClose = () => {
    console.log('Close crypto selection overlay');
    setIsOpen(false);
    setTimeout(() => setIsOpen(true), 1000);
  };

  return (
    <OverlayCryptoSelection
      isOpen={isOpen}
      cryptos={sampleCryptos}
      selectedCryptoId={selectedCryptoId}
      onClose={handleClose}
      onCryptoSelect={handleCryptoSelect}
      title="Выберите криптовалюту"
    />
  );
};

export const Default: Story = {
  render: () => <InteractiveOverlay initialSelected="usdt-1" />
};
