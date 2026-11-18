import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react'

import { Button } from './button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'

const meta = {
  title: 'UI/Command',
  component: Command,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

function Items() {
  return (
    <>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon />
          Calendar
        </CommandItem>
        <CommandItem>
          <SmileIcon />
          Search emoji
        </CommandItem>
        <CommandItem disabled>
          <CalculatorIcon />
          Calculator (disabled)
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <UserIcon />
          Profile
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCardIcon />
          Billing
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SettingsIcon />
          Settings
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <Command {...args} className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <Items />
      </CommandList>
    </Command>
  ),
}

export const WithSearchQuery: Story = {
  name: 'Filtered (query typed)',
  render: (args) => (
    <Command {...args} className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." defaultValue="set" />
      <CommandList>
        <Items />
      </CommandList>
    </Command>
  ),
}

export const Empty: Story = {
  render: (args) => (
    <Command {...args} className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." defaultValue="zzzzz" />
      <CommandList>
        <Items />
      </CommandList>
    </Command>
  ),
}

export const LongList: Story = {
  render: (args) => (
    <Command {...args} className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search items..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Items">
          {Array.from({ length: 40 }, (_, i) => (
            <CommandItem key={i}>Item number {i + 1}</CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const DisabledInput: Story = {
  render: (args) => (
    <Command {...args} className="rounded-lg border shadow-md">
      <CommandInput placeholder="Disabled" disabled />
      <CommandList>
        <Items />
      </CommandList>
    </Command>
  ),
}

function DialogDemo({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <Items />
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

export const Dialog: Story = {
  render: () => <DialogDemo />,
}

export const DialogOpen: Story = {
  render: () => <DialogDemo defaultOpen />,
}
