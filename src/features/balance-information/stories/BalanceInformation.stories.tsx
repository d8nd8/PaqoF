import React from 'react';

import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BalanceCard } from '@/features/balance-information/BalanceInformation'
import { action } from 'storybook/actions'

const MobileContainer = styled.div({
  width: '375px',
  margin: '0 auto',
  padding: '20px 0',
  backgroundColor: '#F2F2F7',
});

const meta: Meta<typeof BalanceCard> = {
  title: 'HomeComponents/BalanceInformation',
  component: BalanceCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Карточка баланса с возможностью скрытия суммы и действиями пополнения, отправки и оплаты'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    balance: {
      control: { type: 'number' },
      description: 'Сумма баланса'
    },
    currency: {
      control: { type: 'text' },
      description: 'Символ валюты'
    },
    isVisible: {
      control: { type: 'boolean' },
      description: 'Видимость баланса по умолчанию'
    },
  },
  decorators: [
    (Story) => (
      <MobileContainer>
        <Story />
      </MobileContainer>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultStory(args) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <BalanceCard
          {...args}
          onTopUp={action('top-up-clicked')}
          onSend={action('send-clicked')}
          onPay={action('pay-clicked')}
        />
      </div>
    );
  },
  args: {
    balance: 95450.0,
    currency: '₽',
    isVisible: true,
  }
};