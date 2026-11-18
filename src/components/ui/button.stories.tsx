import type { Meta, StoryObj } from '@storybook/react-vite'
import { MailIcon, PlusIcon } from 'lucide-react'

import { Button } from './button'

const variants = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const
const sizes = ['xs', 'sm', 'default', 'lg'] as const
const iconSizes = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: [...sizes, ...iconSizes] },
    disabled: { control: 'boolean' },
  },
  args: { children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {sizes.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
}

export const IconSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {iconSizes.map((size) => (
        <Button key={size} {...args} size={size} aria-label={size}>
          <PlusIcon />
        </Button>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>
        <MailIcon data-icon="inline-start" />
        Login with email
      </Button>
      <Button {...args} variant="outline">
        Add item
        <PlusIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} disabled>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, variant: 'outline', children: 'Invalid' },
}
