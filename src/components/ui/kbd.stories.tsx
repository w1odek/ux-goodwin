import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpIcon, CommandIcon } from 'lucide-react'

import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  args: { children: 'K' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Keys: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {['Esc', 'Tab', 'Enter', 'Shift', 'Ctrl', 'Alt', 'Space', 'F5'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>
        <CommandIcon />
      </Kbd>
      <Kbd>
        <ArrowUpIcon />
      </Kbd>
      <Kbd>
        <CommandIcon />
        Cmd
      </Kbd>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>
          <CommandIcon />
        </Kbd>
        <span className="text-xs text-muted-foreground">+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  ),
}

export const InSentence: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save, or <Kbd>Esc</Kbd> to cancel.
    </p>
  ),
}
