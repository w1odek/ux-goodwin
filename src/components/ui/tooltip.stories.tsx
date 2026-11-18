import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusIcon } from 'lucide-react'

import { Button } from './button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const sides = ['top', 'right', 'bottom', 'left'] as const

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex min-h-40 items-center justify-center p-12">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
}

export const Open: Story = {
  render: (args) => (
    <Tooltip {...args} defaultOpen>
      <TooltipTrigger render={<Button variant="outline" />}>Trigger</TooltipTrigger>
      <TooltipContent>Always visible tooltip</TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  render: (args) => (
    <div className="flex gap-24 py-12">
      {sides.map((side) => (
        <Tooltip key={side} {...args} defaultOpen>
          <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const IconButton: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button size="icon" variant="outline" aria-label="Add" />}>
        <PlusIcon />
      </TooltipTrigger>
      <TooltipContent>Add new item</TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Tooltip {...args} defaultOpen>
      <TooltipTrigger render={<Button variant="outline" />}>Details</TooltipTrigger>
      <TooltipContent>
        This is a longer tooltip message that wraps onto multiple lines because of the max width.
      </TooltipContent>
    </Tooltip>
  ),
}
