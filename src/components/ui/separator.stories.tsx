import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from './separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Project Overview</h4>
        <p className="text-sm text-muted-foreground">An open-source UI toolkit.</p>
      </div>
      <Separator {...args} className="my-4" />
      <p className="text-sm">Content below the separator.</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator {...args} />
      <span>Docs</span>
      <Separator {...args} />
      <span>Source</span>
    </div>
  ),
}
