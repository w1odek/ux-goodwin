import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from './button'
import { Message, MessageContent } from './message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerScrollable,
} from './message-scroller'

const meta = {
  title: 'UI/MessageScroller',
  component: MessageScrollerProvider,
  tags: ['autodocs'],
  argTypes: {
    autoScroll: { control: 'boolean' },
    defaultScrollPosition: { control: 'select', options: ['start', 'end', 'last-anchor'] },
  },
  args: { autoScroll: true, defaultScrollPosition: 'end' },
  decorators: [
    (Story) => (
      <div className="h-96 w-full max-w-md rounded-lg border">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MessageScrollerProvider>

export default meta
type Story = StoryObj<typeof meta>

const bubble = (own: boolean) =>
  own
    ? 'w-fit max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-primary-foreground'
    : 'w-fit max-w-[85%] rounded-2xl bg-muted px-3 py-2'

function makeMessages(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: `m-${i}`,
    own: i % 2 === 0,
    text:
      i % 2 === 0
        ? `User message number ${i + 1}`
        : `Assistant reply number ${i + 1}. Here is some additional detail to make this message wrap over a couple of lines.`,
  }))
}

function Messages({ items, anchorLast }: { items: ReturnType<typeof makeMessages>; anchorLast?: boolean }) {
  return (
    <>
      {items.map((m, i) => (
        <MessageScrollerItem
          key={m.id}
          messageId={m.id}
          scrollAnchor={anchorLast ? i === items.length - 1 : false}
          className="px-4"
        >
          <Message align={m.own ? 'end' : 'start'}>
            <MessageContent>
              <div className={bubble(m.own)}>{m.text}</div>
            </MessageContent>
          </Message>
        </MessageScrollerItem>
      ))}
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="py-4">
            <Messages items={makeMessages(20)} />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}

export const StartPosition: Story = {
  args: { defaultScrollPosition: 'start' },
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="py-4">
            <Messages items={makeMessages(20)} />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="start">
          <ArrowUpIcon />
          <span className="sr-only">Scroll to start</span>
        </MessageScrollerButton>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}

export const LastAnchor: Story = {
  args: { defaultScrollPosition: 'last-anchor' },
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="py-4">
            <Messages items={makeMessages(12)} anchorLast />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}

export const Empty: Story = {
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="items-center justify-center">
            <p className="text-sm text-muted-foreground">No messages yet</p>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}

export const ButtonVariants: Story = {
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="py-4">
            <Messages items={makeMessages(20)} />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton variant="default" size="icon" />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}

function Controls() {
  const { scrollToStart, scrollToEnd } = useMessageScroller()
  const { start, end } = useMessageScrollerScrollable()
  return (
    <div className="flex items-center gap-2 border-b p-2">
      <Button size="xs" variant="outline" disabled={!start} onClick={() => scrollToStart()}>
        Top
      </Button>
      <Button size="xs" variant="outline" disabled={!end} onClick={() => scrollToEnd()}>
        Bottom
      </Button>
    </div>
  )
}

function AppendDemo() {
  const [items, setItems] = React.useState(() => makeMessages(8))
  const { scrollToEnd } = useMessageScroller()
  return (
    <>
      <div className="flex items-center gap-2 border-b p-2">
        <Button
          size="xs"
          onClick={() => {
            setItems((prev) => [
              ...prev,
              { id: `n-${prev.length}`, own: prev.length % 2 === 0, text: `New message number ${prev.length + 1}` },
            ])
            requestAnimationFrame(() => scrollToEnd())
          }}
        >
          Add message
        </Button>
      </div>
      <MessageScroller>
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="py-4">
            <Messages items={items} />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </>
  )
}

export const WithHooks: Story = {
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <div className="flex size-full flex-col">
        <Controls />
        <div className="min-h-0 flex-1">
          <MessageScroller>
            <MessageScrollerViewport aria-label="Conversation">
              <MessageScrollerContent className="py-4">
                <Messages items={makeMessages(20)} />
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </div>
      </div>
    </MessageScrollerProvider>
  ),
}

export const AppendMessages: Story = {
  render: (args) => (
    <MessageScrollerProvider {...args}>
      <div className="flex size-full flex-col">
        <AppendDemo />
      </div>
    </MessageScrollerProvider>
  ),
}
