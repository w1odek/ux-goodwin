import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from './avatar'
import { Button } from './button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const sides = ['top', 'right', 'bottom', 'left'] as const
const aligns = ['start', 'center', 'end'] as const

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-64 items-start justify-center pt-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

function Profile() {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold">@jane</h4>
        <p className="text-sm">The creator of this design system. Loves tidy components.</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarIcon className="size-3.5" />
          Joined December 2021
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="link" />}>@jane</HoverCardTrigger>
      <HoverCardContent>
        <Profile />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: Default.render,
}

export const Sides: Story = {
  args: { defaultOpen: true },
  decorators: [
    (Story) => (
      <div className="flex min-h-96 items-center justify-center">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="outline" />}>Hover (side = top)</HoverCardTrigger>
      <HoverCardContent side="top">Content placed on the top side.</HoverCardContent>
    </HoverCard>
  ),
}

export const PlacementShowcase: Story = {
  name: 'Placement (all sides, open)',
  decorators: [
    (Story) => (
      <div className="min-h-[28rem] w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-2 gap-x-48 gap-y-40 pt-24 pl-24">
      {sides.map((side) => (
        <HoverCard key={side} defaultOpen>
          <HoverCardTrigger render={<Button variant="outline" size="sm" />}>{side}</HoverCardTrigger>
          <HoverCardContent side={side} className="w-40">
            side: {side}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="flex gap-24">
      {aligns.map((align) => (
        <HoverCard key={align}>
          <HoverCardTrigger render={<Button variant="outline" />}>{align}</HoverCardTrigger>
          <HoverCardContent align={align}>align: {align}</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}

export const LongContent: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="link" />}>Read more</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}
