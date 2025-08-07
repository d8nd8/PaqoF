import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { PaymentOverlay, type PaymentStep } from '@/features/payment-overlay/PaymentOverlay';
import { type CryptoItemData } from '@/features/crypto-list/CryptoList';

const meta: Meta<typeof PaymentOverlay> = {
  title: 'Components/PaymentOverlay',
  component: PaymentOverlay,
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

const availableCurrencies: CryptoItemData[] = [
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
    amount: '1.18234 BTC',
    amountInRubles: '34 880.61 ₽',
    icon: '₿',
    iconColor: '#F7931A'
  },
  {
    id: 'usdc-1',
    name: 'USDC',
    symbol: 'USDC',
    amount: '850.00 USDC',
    amountInRubles: '77 650.00 ₽',
    icon: 'U',
    iconColor: '#2775CA'
  }
];

const InteractivePaymentOverlay = ({
                                     initialStep = 'form',
                                     initialCurrency
                                   }: {
  initialStep?: PaymentStep;
  initialCurrency?: CryptoItemData;
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CryptoItemData | undefined>(
    initialCurrency || availableCurrencies[0]
  );
  const [isOpen, setIsOpen] = useState(true);

  const handlePayment = async (currency: CryptoItemData, amount: string) => {
    console.log('💳 Processing payment:', { currency, amount });
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve();
        } else {
          reject(new Error('Payment failed'));
        }
      }, 2000);
    });
  };

  return (
    <PaymentOverlay
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        setTimeout(() => setIsOpen(true), 1000); // Переоткрываем для демо
      }}
      selectedCurrency={selectedCurrency}
      availableCurrencies={availableCurrencies}
      onCurrencySelect={setSelectedCurrency}
      amount="15.095 USDT"
      exchangeRate="85.49 USDT"
      commission="20 сек"
      onPayment={handlePayment}
      step={initialStep}
    />
  );
};

export const PaymentForm: Story = {
  render: () => (
    <InteractivePaymentOverlay />
  )
};

export const SuccessTransaction: Story = {
  render: () => (
    <InteractivePaymentOverlay
      initialStep="success"
    />
  )
};

export const ErrorQRCode: Story = {
  render: () => (
    <InteractivePaymentOverlay
      initialStep="error"
    />
  )
};

export const WithToncoin: Story = {
  render: () => (
    <InteractivePaymentOverlay
      initialCurrency={availableCurrencies[1]}
    />
  )
};

export const WithBitcoin: Story = {
  render: () => (
    <InteractivePaymentOverlay
      initialCurrency={availableCurrencies[2]}
    />
  )
};