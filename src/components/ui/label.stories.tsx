import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email address' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label {...args} htmlFor="label-email" />
      <Input id="label-email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="label-terms" />
      <Label htmlFor="label-terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const DisabledPeer: Story = {
  render: () => (
    <div className="flex w-72 flex-col-reverse gap-2">
      <Input id="label-disabled" className="peer" disabled placeholder="Disabled input" />
      <Label htmlFor="label-disabled">
        Disabled field
      </Label>
    </div>
  ),
}

export const DisabledGroup: Story = {
  render: () => (
    <div data-disabled="true" className="group flex items-center gap-2">
      <Checkbox id="label-group-disabled" disabled />
      <Label htmlFor="label-group-disabled">Disabled via group</Label>
    </div>
  ),
}
