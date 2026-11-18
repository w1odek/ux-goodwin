import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: { defaultValue: 'comfortable' },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
]

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`rg-${o.value}`} />
          <Label htmlFor={`rg-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Unchecked: Story = {
  args: { defaultValue: undefined },
  render: Default.render,
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} className="flex w-fit gap-4">
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`rgh-${o.value}`} />
          <Label htmlFor={`rgh-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}

export const DisabledItem: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="rgd-a" />
        <Label htmlFor="rgd-a">Enabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="locked" id="rgd-b" disabled />
        <Label htmlFor="rgd-b">Disabled</Label>
      </div>
    </RadioGroup>
  ),
}

export const Invalid: Story = {
  args: { defaultValue: undefined },
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`rgi-${o.value}`} aria-invalid />
          <Label htmlFor={`rgi-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
