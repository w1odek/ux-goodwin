import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderOpenIcon, InboxIcon, SearchXIcon } from 'lucide-react'

import { Button } from './button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './empty'

const mediaVariants = ['default', 'icon'] as const

const meta = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty {...args} className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You have not created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create project</Button>
          <Button variant="outline">Import project</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
}

export const MediaVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {mediaVariants.map((variant) => (
        <Empty key={variant} {...args} className="border">
          <EmptyHeader>
            <EmptyMedia variant={variant}>
              <InboxIcon className={variant === 'default' ? 'size-8' : undefined} />
            </EmptyMedia>
            <EmptyTitle>Media variant: {variant}</EmptyTitle>
            <EmptyDescription>Your inbox is empty.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ))}
    </div>
  ),
}

export const DashedBorder: Story = {
  render: (args) => (
    <Empty {...args} className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filters to find what you are looking for.{' '}
          <a href="#">Learn more</a>
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const TitleOnly: Story = {
  render: (args) => (
    <Empty {...args} className="border">
      <EmptyHeader>
        <EmptyTitle>Nothing here</EmptyTitle>
      </EmptyHeader>
    </Empty>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Empty {...args} className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>A rather long empty state title that might wrap onto several lines</EmptyTitle>
        <EmptyDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Primary action</Button>
      </EmptyContent>
    </Empty>
  ),
}
