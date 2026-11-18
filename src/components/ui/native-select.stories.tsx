import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from './label'
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from './native-select'

const sizes = ['default', 'sm'] as const

const meta = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizes },
    disabled: { control: 'boolean' },
  },
  args: { 'aria-label': 'Fruit' },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {sizes.map((size) => (
        <NativeSelect key={size} {...args} size={size} aria-label={size}>
          <NativeSelectOption value="">Size {size}</NativeSelectOption>
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b">Option B</NativeSelectOption>
        </NativeSelect>
      ))}
    </div>
  ),
}

export const WithGroups: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a food</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="potato">Potato</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="native-select-label">Country</Label>
      <NativeSelect {...args} id="native-select-label">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
        <NativeSelectOption value="jp">Japan</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledOption: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="free">Free</NativeSelectOption>
      <NativeSelectOption value="pro">Pro</NativeSelectOption>
      <NativeSelectOption value="enterprise" disabled>
        Enterprise (unavailable)
      </NativeSelectOption>
    </NativeSelect>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true },
}

export const LongOptions: Story = {
  render: (args) => (
    <NativeSelect {...args} className="w-64">
      <NativeSelectOption value="1">
        An option with a very long label that will be cut off by the select width
      </NativeSelectOption>
      <NativeSelectOption value="2">Short</NativeSelectOption>
    </NativeSelect>
  ),
}
