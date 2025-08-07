import type { Meta, StoryObj } from '@storybook/react-vite';
import { OverlayTransactionDetails } from '@/features/overlay-transaction-details/OverlayTransactionDetails'

const meta: Meta<typeof OverlayTransactionDetails> = {
  title: 'HistoryComponents/OverlayTransactionDetails',
  component: OverlayTransactionDetails,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    onClose: { action: 'close' },
    onCopyClick: { action: 'copyClick' },
    onAMLClick: { action: 'amlClick' },
    onBottomButtonClick: { action: 'bottomButtonClick' },
  },
};

export default meta;
type Story = StoryObj<typeof OverlayTransactionDetails>;

export const Withdraw: Story = {
  args: {
    isOpen: true,
    transaction: {
      id: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      type: 'withdraw',
      amount: '110 323.99 ₽',
      amountUSD: '1 290.49 USDT',
      status: 'success',
      timestamp: '2024-10-26T12:45:00Z',
      exchangeRate: '85.49 USDT',
      creditAmount: '1 290.49 USDT',
      receivedAmount: '1 300.54 USDT',
      commission: '10.5 USDT',
      hash: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      transactionId: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      network: 'TRC 20',
      sender: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      amlStatus: 'completed',
    },
    bottomButtonText: 'Открыть в обозревателе',
    showBottomButton: true,
  },
};

export const Deposit: Story = {
  args: {
    isOpen: true,
    transaction: {
      id: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      type: 'deposit',
      amount: '1 290.49 USDT',
      amountUSD: '1 290.49 USDT',
      status: 'problem',
      timestamp: '2024-10-26T12:45:00Z',
      creditAmount: '1 290.49 USDT',
      receivedAmount: '1 300.54 USDT',
      commission: '10.5 USDT',
      hash: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      transactionId: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      network: 'TRC 20',
      sender: 'Zafa74A8B9C0D1E2F3G4H5I6J7K8L9FqfQy123',
      hasAMLIssue: true,
    },
    bottomButtonText: 'Открыть в обозревателе',
    showBottomButton: true,
  },
};