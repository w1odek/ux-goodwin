import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Slider } from './slider'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
  args: { defaultValue: [50] },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  args: { defaultValue: [25, 75] },
}

export const WithStep: Story = {
  args: { defaultValue: [40], step: 10 },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Vertical: Story = {
  args: { orientation: 'vertical', defaultValue: [60] },
  decorators: [
    (Story) => (
      <div className="h-48">
        <Story />
      </div>
    ),
  ],
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | readonly number[]>([30])
    return (
      <div className="space-y-3">
        <Slider {...args} value={value} onValueChange={setValue} />
        <p className="text-sm text-muted-foreground">
          Value: {Array.isArray(value) ? value.join(', ') : String(value)}
        </p>
      </div>
    )
  },
}
