import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu'

const meta = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-96 items-start justify-center pt-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: Open menu</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>My account</ContextMenuLabel>
          <ContextMenuItem>
            <UserIcon />
            Profile
            <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <CreditCardIcon />
            Billing
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <SettingsIcon />
            Settings
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: Default.render,
}

export const ItemVariantsAndStates: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: Item states</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Default</ContextMenuLabel>
          <ContextMenuItem>Default item</ContextMenuItem>
          <ContextMenuItem disabled>Disabled item</ContextMenuItem>
          <ContextMenuItem inset>Inset item</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>Inset label</ContextMenuLabel>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Destructive item
          </ContextMenuItem>
          <ContextMenuItem variant="destructive" disabled>
            <TrashIcon />
            Destructive disabled
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

function CheckboxDemo(args: React.ComponentProps<typeof ContextMenu>) {
  const [status, setStatus] = useState(true)
  const [panel, setPanel] = useState(false)
  return (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: View options</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Appearance</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={status} onCheckedChange={setStatus}>
            Status bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
            Activity panel
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked disabled>
            Disabled (checked)
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem inset checked={false}>
            Inset unchecked
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const CheckboxItems: Story = {
  args: { defaultOpen: true },
  render: (args) => <CheckboxDemo {...args} />,
}

function RadioDemo(args: React.ComponentProps<typeof ContextMenu>) {
  const [position, setPosition] = useState('bottom')
  return (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: Panel position</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Position</ContextMenuLabel>
          <ContextMenuRadioGroup value={position} onValueChange={setPosition}>
            <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
            <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
            <ContextMenuRadioItem value="left" disabled>
              Left (disabled)
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const RadioItems: Story = {
  args: { defaultOpen: true },
  render: (args) => <RadioDemo {...args} />,
}

export const WithSubmenu: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: Share</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>New file</ContextMenuItem>
        <ContextMenuSub defaultOpen>
          <ContextMenuSubTrigger>Invite users</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Message</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>More...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Inset submenu</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}

export const LongContent: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm">Right click here: Many items</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        {Array.from({ length: 30 }, (_, i) => (
          <ContextMenuItem key={i}>Menu item number {i + 1} with a long label</ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  ),
}
