import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

import { Badge } from './badge'

const variants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
  },
  args: { children: 'Badge' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge {...args}>
        <CheckIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge {...args} variant="outline">
        Next
        <ArrowRightIcon data-icon="inline-end" />
      </Badge>
    </div>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((variant) => (
        <Badge key={variant} {...args} variant={variant} render={<a href="#" />}>
          {variant} link
        </Badge>
      ))}
    </div>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, variant: 'outline', children: 'Invalid' },
}

export const LongContent: Story = {
  render: (args) => (
    <div className="w-40">
      <Badge {...args}>A very long badge label that overflows</Badge>
    </div>
  ),
}
