import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollArea, ScrollBar } from './scroll-area'

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }, (_, i) => `v1.2.0-beta.${40 - i}`)

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="border-b py-2 text-sm last:border-b-0">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="flex h-24 w-36 shrink-0 items-center justify-center rounded-md bg-muted text-sm"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const BothDirections: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-64 w-80 rounded-md border">
      <div className="w-[640px] space-y-2 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-sm">
            Row {i + 1}: this line is intentionally long so that it overflows the viewport horizontally as well.
          </p>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const ShortContent: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-40 w-64 rounded-md border">
      <p className="p-4 text-sm">Content fits, so no scrollbar thumb is needed.</p>
    </ScrollArea>
  ),
}
