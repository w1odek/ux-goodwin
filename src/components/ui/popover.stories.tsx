import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './popover'

const sides = ['top', 'right', 'bottom', 'left'] as const
const aligns = ['start', 'center', 'end'] as const

const meta = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex min-h-72 w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

const body = (
  <PopoverHeader>
    <PopoverTitle>Dimensions</PopoverTitle>
    <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
  </PopoverHeader>
)

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent>{body}</PopoverContent>
    </Popover>
  ),
}

export const DefaultOpen: Story = {
  render: (args) => (
    <Popover {...args} defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent>
        {body}
        <div className="grid gap-2">
          <Label htmlFor="popover-width">Width</Label>
          <Input id="popover-width" defaultValue="100%" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="popover-height">Height</Label>
          <Input id="popover-height" defaultValue="25px" />
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Sides: Story = {
  decorators: [
    (Story) => (
      <div className="flex min-h-96 w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <div className="grid grid-cols-2 gap-x-48 gap-y-24">
      {sides.map((side) => (
        <Popover key={side} {...args} defaultOpen>
          <PopoverTrigger render={<Button variant="outline" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            <PopoverTitle>Side {side}</PopoverTitle>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}

export const Alignments: Story = {
  render: (args) => (
    <div className="flex gap-48">
      {aligns.map((align) => (
        <Popover key={align} {...args} defaultOpen>
          <PopoverTrigger render={<Button variant="outline" />}>{align}</PopoverTrigger>
          <PopoverContent align={align} className="w-40">
            <PopoverTitle>Align {align}</PopoverTitle>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Popover {...args} defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>Details</PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>A popover with a rather long title that wraps</PopoverTitle>
          <PopoverDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </PopoverDescription>
        </PopoverHeader>
        <Button size="sm">Confirm</Button>
      </PopoverContent>
    </Popover>
  ),
}
