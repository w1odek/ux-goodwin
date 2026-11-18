import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react'

import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu'

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-80 items-start justify-center pt-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open menu</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: Default.render,
}

export const ItemVariantsAndStates: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Item states</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Default</DropdownMenuLabel>
          <DropdownMenuItem>Default item</DropdownMenuItem>
          <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
          <DropdownMenuItem inset>Inset item</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Inset label</DropdownMenuLabel>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Destructive item
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" disabled>
            <TrashIcon />
            Destructive disabled
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

function CheckboxDemo(args: React.ComponentProps<typeof DropdownMenu>) {
  const [status, setStatus] = useState(true)
  const [panel, setPanel] = useState(false)
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>View options</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={status} onCheckedChange={setStatus}>
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
            Activity panel
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked disabled>
            Disabled (checked)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem inset checked={false}>
            Inset unchecked
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const CheckboxItems: Story = {
  args: { defaultOpen: true },
  render: (args) => <CheckboxDemo {...args} />,
}

function RadioDemo(args: React.ComponentProps<typeof DropdownMenu>) {
  const [position, setPosition] = useState('bottom')
  return (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Panel position</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left" disabled>
              Left (disabled)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const RadioItems: Story = {
  args: { defaultOpen: true },
  render: (args) => <RadioDemo {...args} />,
}

export const WithSubmenu: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Share</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>New file</DropdownMenuItem>
        <DropdownMenuSub defaultOpen>
          <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Message</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>More...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>Inset submenu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}

export const LongContent: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Many items</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {Array.from({ length: 30 }, (_, i) => (
          <DropdownMenuItem key={i}>Menu item number {i + 1} with a long label</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
