import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckCircle2Icon, ClockIcon, SparklesIcon } from 'lucide-react'

import { Marker, MarkerContent, MarkerIcon } from './marker'

const variants = ['default', 'separator', 'border'] as const

const meta = {
  title: 'UI/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
  },
  args: { variant: 'default' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Marker {...args}>
      <MarkerContent>Today</MarkerContent>
    </Marker>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {variants.map((variant) => (
        <Marker key={variant} {...args} variant={variant}>
          <MarkerContent>{variant}</MarkerContent>
        </Marker>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {variants.map((variant) => (
        <Marker key={variant} {...args} variant={variant}>
          <MarkerIcon>
            <SparklesIcon />
          </MarkerIcon>
          <MarkerContent>Thought for 12 seconds ({variant})</MarkerContent>
        </Marker>
      ))}
    </div>
  ),
}

export const StatusMarkers: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Marker {...args}>
        <MarkerIcon>
          <CheckCircle2Icon />
        </MarkerIcon>
        <MarkerContent>Task completed</MarkerContent>
      </Marker>
      <Marker {...args}>
        <MarkerIcon>
          <ClockIcon />
        </MarkerIcon>
        <MarkerContent>Waiting for approval</MarkerContent>
      </Marker>
    </div>
  ),
}

export const WithLink: Story = {
  render: (args) => (
    <Marker {...args} variant="separator">
      <MarkerContent>
        Conversation summarized. <a href="#details">View details</a>
      </MarkerContent>
    </Marker>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Marker {...args}>
      <MarkerIcon>
        <SparklesIcon />
      </MarkerIcon>
      <MarkerContent>
        This marker has quite a lot of content that wraps onto multiple lines, including averyveryveryveryverylongunbrokenwordthatshouldwrapproperly
        to demonstrate how the layout behaves in narrow containers.
      </MarkerContent>
    </Marker>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <Marker {...args} render={<a href="#marker" />}>
      <MarkerContent>Rendered as an anchor</MarkerContent>
    </Marker>
  ),
}
