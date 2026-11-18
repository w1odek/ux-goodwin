import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Input } from './input'
import { DirectionProvider, useDirection } from './direction'

const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'inline-radio', options: ['ltr', 'rtl'] },
  },
  args: { direction: 'ltr', children: null },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

function CurrentDirection() {
  const direction = useDirection()
  return (
    <p className="text-sm text-muted-foreground">
      useDirection(): <code className="font-mono text-foreground">{direction}</code>
    </p>
  )
}

function Panel({ dir }: { dir: 'ltr' | 'rtl' }) {
  return (
    <div dir={dir} className="flex w-72 flex-col gap-3 rounded-lg border p-4">
      <CurrentDirection />
      <Input placeholder="Type here" />
      <Button>Submit</Button>
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <DirectionProvider {...args}>
      <Panel dir={args.direction ?? 'ltr'} />
    </DirectionProvider>
  ),
}

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <Panel dir="ltr" />
    </DirectionProvider>
  ),
}

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <Panel dir="rtl" />
    </DirectionProvider>
  ),
}

export const SideBySide: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <DirectionProvider direction="ltr">
        <Panel dir="ltr" />
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <Panel dir="rtl" />
      </DirectionProvider>
    </div>
  ),
}
