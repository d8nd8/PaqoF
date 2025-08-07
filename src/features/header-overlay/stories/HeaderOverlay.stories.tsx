import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeaderOverlay } from '@/features/header-overlay'


const meta: Meta<typeof HeaderOverlay> = {
  title: 'Notifications/HeaderOverlay',
  component: HeaderOverlay,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100%', margin: '0 auto', backgroundColor: '#C8A2C8', minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    rightButtonText: 'Закрыть',
    variant: 'default',
    onLeftButtonClick: () => console.log('Left button clicked'),
    onRightButtonClick: () => console.log('Right button clicked')
  }
};

export const WithChevrons: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    rightButtonText: 'Закрыть',
    showLeftChevron: true,
    showRightChevron: true,
    variant: 'default',
    onLeftButtonClick: () => console.log('Left button clicked'),
    onRightButtonClick: () => console.log('Right button clicked'),
    onLeftChevronClick: () => console.log('Left chevron clicked'),
    onRightChevronClick: () => console.log('Right chevron clicked')
  }
};

export const WhiteVariant: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    rightButtonText: 'Закрыть',
    showLeftChevron: true,
    showRightChevron: true,
    variant: 'white',
    onLeftButtonClick: () => console.log('Left button clicked'),
    onRightButtonClick: () => console.log('Right button clicked'),
    onLeftChevronClick: () => console.log('Left chevron clicked'),
    onRightChevronClick: () => console.log('Right chevron clicked')
  }
};

export const PurpleVariant: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    rightButtonText: 'Закрыть',
    showLeftChevron: true,
    showRightChevron: true,
    variant: 'purple',
    onLeftButtonClick: () => console.log('Left button clicked'),
    onRightButtonClick: () => console.log('Right button clicked'),
    onLeftChevronClick: () => console.log('Left chevron clicked'),
    onRightChevronClick: () => console.log('Right chevron clicked')
  }
};

export const TitleOnly: Story = {
  args: {
    title: 'Заголовок',
    variant: 'default'
  }
};

export const LeftButtonOnly: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    variant: 'default',
    onLeftButtonClick: () => console.log('Left button clicked')
  }
};

export const RightButtonOnly: Story = {
  args: {
    title: 'Заголовок',
    rightButtonText: 'Закрыть',
    variant: 'default',
    onRightButtonClick: () => console.log('Right button clicked')
  }
};

export const ChevronsOnly: Story = {
  args: {
    title: 'Заголовок',
    showLeftChevron: true,
    showRightChevron: true,
    variant: 'default',
    onLeftChevronClick: () => console.log('Left chevron clicked'),
    onRightChevronClick: () => console.log('Right chevron clicked')
  }
};

export const Mixed: Story = {
  args: {
    title: 'Заголовок',
    leftButtonText: 'Закрыть',
    showRightChevron: true,
    variant: 'white',
    onLeftButtonClick: () => console.log('Left button clicked'),
    onRightChevronClick: () => console.log('Right chevron clicked')
  }
};