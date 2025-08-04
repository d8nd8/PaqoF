
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AdBanner } from '@/features/ad-banner'

const meta: Meta<typeof AdBanner> = {
  title: 'HomeComponents/AdBanner',
  component: AdBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Баннер с вашим Пакогочи. Уровень прокидывается пропсом и подхватывается картинка + описание.'
      }
    }
  },
  argTypes: {
    level: {
      control: {
        type: 'select'
      },
      options: [1, 2, 3, 4, 5],
      description: 'Выберите уровень Пакогочи (1–5)'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    level: 1
  }
}
