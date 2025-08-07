
import { SecurityPinCode } from '../SecurityPinCode'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SecurityPinCode> = {
  title: 'Security/SecurityPinCode',
  component: SecurityPinCode,
  parameters: {
    layout: 'padded'
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 375, margin: '0 auto', background: '#f5f5f5', padding: 20, borderRadius: 12 }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof SecurityPinCode>

export const Default: Story = {
  args: {
    mode: 'create',
    onComplete: (pin) => alert(`Pin created: ${pin}`)
  }
}

export const Confirm: Story = {
  args: {
    mode: 'confirm',
    onComplete: (pin) => alert(`Confirmed: ${pin}`)
  }
}

export const Remove: Story = {
  args: {
    mode: 'remove',
    onComplete: (pin) => alert(`Removing pin: ${pin}`)
  }
}
