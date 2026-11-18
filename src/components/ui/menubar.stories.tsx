import type { Meta, StoryObj } from '@storybook/react-vite'
import { CopyIcon, SaveIcon, TrashIcon } from 'lucide-react'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './menubar'

const meta = {
  title: 'UI/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="min-h-80 w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const OpenFile: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu defaultOpen>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>Document</MenubarLabel>
            <MenubarItem>
              <SaveIcon />
              Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <CopyIcon />
              Duplicate
            </MenubarItem>
            <MenubarItem disabled>Export</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <TrashIcon />
            Delete
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const CheckboxAndRadioItems: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu defaultOpen>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>Panels</MenubarLabel>
            <MenubarCheckboxItem defaultChecked>Always show bookmarks bar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Always show full URLs</MenubarCheckboxItem>
            <MenubarCheckboxItem disabled>Disabled option</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarRadioGroup defaultValue="system">
            <MenubarLabel inset>Theme</MenubarLabel>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithSubmenu: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu defaultOpen>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Copy link</MenubarItem>
          <MenubarSub defaultOpen>
            <MenubarSubTrigger>Send to</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem inset>Inset item</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
