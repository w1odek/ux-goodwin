import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { 'aria-label': 'Checkbox' },
}

export const Checked: Story = {
  args: { defaultChecked: true, 'aria-label': 'Checked' },
}

export const Indeterminate: Story = {
  args: { indeterminate: true, 'aria-label': 'Indeterminate' },
}

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} /> Unchecked
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} defaultChecked /> Checked
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} indeterminate /> Indeterminate
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} disabled /> Disabled
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} disabled defaultChecked /> Disabled checked
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} aria-invalid /> Invalid
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox {...args} aria-invalid defaultChecked /> Invalid checked
      </label>
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox {...args} /> Accept terms and conditions
    </label>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, 'aria-label': 'Disabled' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, 'aria-label': 'Invalid' },
}
