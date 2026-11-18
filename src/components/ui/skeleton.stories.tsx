import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from './skeleton'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { className: 'h-4 w-64' },
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
}

export const TextLines: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      {['w-full', 'w-full', 'w-5/6', 'w-2/3'].map((w, i) => (
        <Skeleton key={i} className={`h-4 ${w}`} />
      ))}
    </div>
  ),
}
