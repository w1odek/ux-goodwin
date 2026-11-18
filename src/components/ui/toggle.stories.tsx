import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon, ItalicIcon } from 'lucide-react'

import { Toggle } from './toggle'

const variants = ['default', 'outline'] as const
const sizes = ['sm', 'default', 'lg'] as const

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
    disabled: { control: 'boolean' },
    pressed: { control: 'boolean' },
  },
  args: { 'aria-label': 'Toggle bold', children: <BoldIcon /> },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {variants.map((variant) => (
        <Toggle key={variant} {...args} variant={variant} aria-label={variant} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {sizes.map((size) => (
        <Toggle key={size} {...args} size={size} variant="outline" aria-label={size} />
      ))}
    </div>
  ),
}

export const Pressed: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {variants.map((variant) => (
        <Toggle key={variant} {...args} variant={variant} defaultPressed aria-label={variant} />
      ))}
    </div>
  ),
}

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Toggle {...args} variant="outline" aria-label="Italic">
        <ItalicIcon data-icon="inline-start" />
        Italic
      </Toggle>
      <Toggle {...args} aria-label="Bold">
        <BoldIcon data-icon="inline-start" />
        Bold
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {variants.map((variant) => (
        <Toggle key={variant} {...args} variant={variant} disabled aria-label={variant} />
      ))}
      <Toggle {...args} variant="outline" disabled defaultPressed aria-label="pressed" />
    </div>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, variant: 'outline' },
}
