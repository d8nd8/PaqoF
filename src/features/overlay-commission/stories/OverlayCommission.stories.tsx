
import type { Meta, StoryObj } from '@storybook/react-vite'
import { OverlayCommission } from '@/features/overlay-commission'

const meta: Meta<typeof OverlayCommission> = {
  title: 'Components/OverlayCommission',
  component: OverlayCommission,
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

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Почему комиссия 2.75$?',
    description: 'Сеть Tron взимает комиссию за каждый перевод 2.5$. Дополнительные 0.25$ покрывают себестоимость AML-проверки, которая гарантирует безопасность.',
    buttonText: 'Вернуться',
    onClose: () => console.log('Close commission overlay'),
    onButtonClick: () => console.log('Button clicked'),
    isInStorybook: true
  }
};

export const TelegramMiniApp: Story = {
  args: {
    isOpen: true,
    title: 'Почему комиссия 2.75$?',
    description: 'Сеть Tron взимает комиссию за каждый перевод 2.5$. Дополнительные 0.25$ покрывают себестоимость AML-проверки, которая гарантирует безопасность.',
    buttonText: 'Понятно',
    onClose: () => console.log('Close from Telegram'),
    onButtonClick: () => console.log('Understood in Telegram'),
    isInStorybook: true
  }
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: 'Подробная информация о комиссиях в сети Tron',
    description: 'Сеть Tron взимает комиссию за каждый перевод 2.5$. Дополнительные 0.25$ покрывают себестоимость AML-проверки, которая гарантирует безопасность.',
    buttonText: 'Закрыть',
    onClose: () => console.log('Close long content'),
    onButtonClick: () => console.log('Close long content clicked'),
    isInStorybook: true
  }
};

export const Closed: Story = {
  args: {
    isOpen: false,
    title: 'Почему комиссия 2.75$?',
    description: 'Сеть Tron взимает комиссию за каждый перевод 2.5$. Дополнительные 0.25$ покрывают себестоимость AML-проверки, которая гарантирует безопасность.',
    onClose: () => console.log('Close commission overlay'),
    isInStorybook: true
  }
};