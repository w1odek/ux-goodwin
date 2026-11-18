import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Spinner } from './spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="text-primary" />
      <Spinner className="text-muted-foreground" />
      <Spinner className="text-destructive" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Loading
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
    </div>
  ),
}
