import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from './switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Switch {...args} size="sm" aria-label="Small" />
      <Switch {...args} size="default" aria-label="Default" />
      <Switch {...args} size="sm" defaultChecked aria-label="Small checked" />
      <Switch {...args} size="default" defaultChecked aria-label="Default checked" />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Switch {...args} disabled aria-label="Disabled off" />
      <Switch {...args} disabled defaultChecked aria-label="Disabled on" />
    </div>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true },
}

export const WithLabel: Story = {
  render: (args) => (
    <label className="flex items-center gap-2 text-sm">
      <Switch {...args} />
      Airplane mode
    </label>
  ),
}
