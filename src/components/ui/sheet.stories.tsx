import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Input } from './input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const sides = ['top', 'right', 'bottom', 'left'] as const

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

function ProfileForm({ side, showCloseButton }: { side: (typeof sides)[number]; showCloseButton?: boolean }) {
  return (
    <SheetContent side={side} showCloseButton={showCloseButton}>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Make changes to your profile here. Click save when you are done.</SheetDescription>
      </SheetHeader>
      <div className="grid gap-3 px-4">
        <Input defaultValue="Jane Doe" aria-label="Name" />
        <Input defaultValue="@janedoe" aria-label="Username" />
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
      </SheetFooter>
    </SheetContent>
  )
}

export const Default: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
      <ProfileForm side="right" />
    </Sheet>
  ),
}

export const Sides: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {sides.map((side) => (
        <Sheet key={side} {...args}>
          <SheetTrigger render={<Button variant="outline" />}>{side}</SheetTrigger>
          <ProfileForm side={side} />
        </Sheet>
      ))}
    </div>
  ),
}

export const OpenRight: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <ProfileForm side="right" />
    </Sheet>
  ),
}

export const OpenLeft: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <ProfileForm side="left" />
    </Sheet>
  ),
}

export const OpenTop: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <ProfileForm side="top" />
    </Sheet>
  ),
}

export const OpenBottom: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <ProfileForm side="bottom" />
    </Sheet>
  ),
}

export const WithoutCloseButton: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <ProfileForm side="right" showCloseButton={false} />
    </Sheet>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Sheet {...args} defaultOpen>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Terms of service</SheetTitle>
          <SheetDescription>Scroll to read the full text.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 space-y-3 overflow-y-auto px-4 text-sm">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>Paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          ))}
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Accept</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
