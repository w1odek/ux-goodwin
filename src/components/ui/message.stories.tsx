import type { Meta, StoryObj } from '@storybook/react-vite'
import { BotIcon, CopyIcon, ThumbsUpIcon } from 'lucide-react'

import { Button } from './button'
import { Marker, MarkerContent } from './marker'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from './message'

const aligns = ['start', 'end'] as const

const meta = {
  title: 'UI/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: aligns },
  },
  args: { align: 'start' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

const assistantBubble = 'w-fit max-w-[85%] rounded-2xl bg-muted px-3 py-2'
const userBubble = 'w-fit max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-primary-foreground'

export const Default: Story = {
  render: (args) => (
    <Message {...args}>
      <MessageContent>
        <div className={assistantBubble}>Hello! How can I help you today?</div>
      </MessageContent>
    </Message>
  ),
}

export const Alignments: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Message {...args} align="start">
        <MessageContent>
          <div className={assistantBubble}>Align start: an assistant message.</div>
        </MessageContent>
      </Message>
      <Message {...args} align="end">
        <MessageContent>
          <div className={userBubble}>Align end: a user message.</div>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const WithAvatar: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Message {...args} align="start">
        <MessageAvatar className="size-8">
          <BotIcon className="size-4" />
        </MessageAvatar>
        <MessageContent>
          <div className={assistantBubble}>I can summarize documents and answer questions.</div>
        </MessageContent>
      </Message>
      <Message {...args} align="end">
        <MessageAvatar className="size-8 text-xs font-medium">AB</MessageAvatar>
        <MessageContent>
          <div className={userBubble}>Great, please summarize the attached report.</div>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <Message {...args} align="start">
        <MessageAvatar className="size-8">
          <BotIcon className="size-4" />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant</MessageHeader>
          <div className={assistantBubble}>Here is the summary you asked for.</div>
          <MessageFooter>
            10:24 AM
            <Button variant="ghost" size="icon-xs" aria-label="Copy" className="ml-2">
              <CopyIcon />
            </Button>
            <Button variant="ghost" size="icon-xs" aria-label="Like">
              <ThumbsUpIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message {...args} align="end">
        <MessageContent>
          <MessageHeader className="justify-end">You</MessageHeader>
          <div className={userBubble}>Thanks!</div>
          <MessageFooter>Delivered 10:25 AM</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const Group: Story = {
  render: (args) => (
    <MessageGroup>
      <Message {...args}>
        <MessageContent>
          <div className={assistantBubble}>First message in a group.</div>
        </MessageContent>
      </Message>
      <Message {...args}>
        <MessageContent>
          <div className={assistantBubble}>Second message follows closely.</div>
        </MessageContent>
      </Message>
      <Message {...args}>
        <MessageContent>
          <div className={assistantBubble}>And a third one.</div>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}

export const Conversation: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Message {...args} align="end">
        <MessageContent>
          <div className={userBubble}>What is the status of the release?</div>
        </MessageContent>
      </Message>
      <Message {...args} align="start">
        <MessageAvatar className="size-8">
          <BotIcon className="size-4" />
        </MessageAvatar>
        <MessageContent>
          <div className={assistantBubble}>The release is on track and all checks have passed.</div>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Message {...args}>
      <MessageContent>
        <div className={assistantBubble}>
          This is a long message intended to show wrapping behavior. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Averyveryverylongunbrokenstringwithoutanyspacesatall
          should wrap as well.
        </div>
      </MessageContent>
    </Message>
  ),
}
