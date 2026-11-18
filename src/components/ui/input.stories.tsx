import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './input'
import { Label } from './label'

const types = ['text', 'email', 'password', 'number', 'search', 'url', 'tel', 'date', 'file'] as const

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: types },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { placeholder: 'Enter text' },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Types: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {types.map((type) => (
        <Input key={type} {...args} type={type} placeholder={type} aria-label={type} />
      ))}
    </div>
  ),
}

export const WithValue: Story = {
  args: { defaultValue: 'Hello world' },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" {...args} placeholder="name@example.com" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Disabled input' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'not-an-email', type: 'email' },
}

export const File: Story = {
  args: { type: 'file' },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'Read only value' },
}

export const LongContent: Story = {
  args: {
    defaultValue:
      'A very long value that exceeds the width of the input so that it has to scroll horizontally',
  },
}
