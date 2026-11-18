import type { Meta, StoryObj } from '@storybook/react-vite'

import { Textarea } from './textarea'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
  args: { placeholder: 'Type your message here.' },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { defaultValue: 'Hello, this is some pre-filled text.' },
}

export const LongContent: Story = {
  args: {
    defaultValue: Array.from({ length: 8 }, (_, i) => `Line ${i + 1}: auto-growing content.`).join('\n'),
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit this.' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'Invalid content' },
}
