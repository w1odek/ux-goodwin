import type { Meta, StoryObj } from '@storybook/react-vite'

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from './bubble'

const variants = ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const
const aligns = ['start', 'end'] as const

const meta = {
  title: 'UI/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    align: { control: 'select', options: aligns },
  },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Bubble {...args}>
      <BubbleContent>Hello! How can I help you today?</BubbleContent>
    </Bubble>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <BubbleGroup>
      {variants.map((variant) => (
        <Bubble key={variant} {...args} variant={variant}>
          <BubbleContent>{variant} bubble</BubbleContent>
        </Bubble>
      ))}
    </BubbleGroup>
  ),
}

export const Alignment: Story = {
  render: (args) => (
    <BubbleGroup>
      <Bubble {...args} align="start" variant="muted">
        <BubbleContent>Aligned to the start.</BubbleContent>
      </Bubble>
      <Bubble {...args} align="end">
        <BubbleContent>Aligned to the end.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const Conversation: Story = {
  render: (args) => (
    <BubbleGroup>
      <Bubble {...args} variant="muted">
        <BubbleContent>Did you see the latest release notes?</BubbleContent>
      </Bubble>
      <Bubble {...args} variant="muted">
        <BubbleContent>There are a few breaking changes.</BubbleContent>
      </Bubble>
      <Bubble {...args} align="end">
        <BubbleContent>Not yet, I will take a look now.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const Reactions: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 py-6">
      <Bubble {...args} variant="muted">
        <BubbleContent>Reaction at the bottom end (default).</BubbleContent>
        <BubbleReactions>
          <span>👍</span>
          <span>2</span>
        </BubbleReactions>
      </Bubble>
      <Bubble {...args} variant="muted">
        <BubbleContent>Reaction at the top start.</BubbleContent>
        <BubbleReactions side="top" align="start">
          <span>❤️</span>
        </BubbleReactions>
      </Bubble>
      <Bubble {...args} align="end">
        <BubbleContent>Reaction on an end-aligned bubble.</BubbleContent>
        <BubbleReactions side="bottom" align="start">
          <span>🎉</span>
        </BubbleReactions>
      </Bubble>
    </div>
  ),
}

export const Interactive: Story = {
  render: (args) => (
    <BubbleGroup>
      <Bubble {...args} variant="outline">
        <BubbleContent render={<button type="button" />}>Button bubble</BubbleContent>
      </Bubble>
      <Bubble {...args} variant="secondary">
        <BubbleContent render={<a href="#" />}>Link bubble</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Bubble {...args} variant="secondary">
      <BubbleContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Averyveryveryveryveryveryveryveryveryveryveryveryverylongunbrokenword.
      </BubbleContent>
    </Bubble>
  ),
}
