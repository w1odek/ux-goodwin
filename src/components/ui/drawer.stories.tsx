import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const directions = ['down', 'up', 'left', 'right'] as const

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    swipeDirection: { control: 'select', options: directions },
    showSwipeHandle: { control: 'boolean' },
    modal: { control: 'select', options: [true, false, 'trap-focus'] },
    defaultOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

function Body({ title }: { title: string }) {
  return (
    <>
      <DrawerHeader>
        <DrawerTitle>{title}</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="px-4 py-2 text-sm text-muted-foreground">
        Drawer body content goes here. Swipe or use the buttons to dismiss.
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
      </DrawerFooter>
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
      <DrawerContent>
        <Body title="Move goal" />
      </DrawerContent>
    </Drawer>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: Default.render,
}

export const WithSwipeHandle: Story = {
  args: { defaultOpen: true, showSwipeHandle: true },
  render: Default.render,
}

export const Directions: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {directions.map((direction) => (
        <Drawer key={direction} {...args} swipeDirection={direction}>
          <DrawerTrigger render={<Button variant="outline" />}>{direction}</DrawerTrigger>
          <DrawerContent className={direction === 'left' || direction === 'right' ? 'w-80' : undefined}>
            <Body title={`Swipe ${direction}`} />
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
}

export const Right: Story = {
  args: { defaultOpen: true, swipeDirection: 'right' },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Open right drawer</DrawerTrigger>
      <DrawerContent className="w-80">
        <Body title="Side panel" />
      </DrawerContent>
    </Drawer>
  ),
}

export const NonModal: Story = {
  args: { defaultOpen: true, modal: false },
  render: Default.render,
}

export const LongContent: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
      <DrawerContent className="max-h-[70vh]">
        <DrawerHeader>
          <DrawerTitle>Release notes</DrawerTitle>
          <DrawerDescription>Everything that changed recently.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 text-sm text-muted-foreground">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="mb-3">
              Version 1.{i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
