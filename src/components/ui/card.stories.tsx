import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontalIcon } from 'lucide-react'

import { Button } from './button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const sizes = ['default', 'sm'] as const

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizes },
  },
  decorators: [
    (Story) => (
      <div className="w-80 max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some supporting text.</p>
      </CardContent>
    </Card>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Card key={size} {...args} size={size}>
          <CardHeader>
            <CardTitle>{size} card</CardTitle>
            <CardDescription>Uses the {size} spacing.</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>Last updated 2 hours ago.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="More">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>Details about the project.</CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>Configure your project settings before deploying.</CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const HeaderWithBorder: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader className="border-b">
        <CardTitle>Bordered header</CardTitle>
        <CardDescription>A divider separates the header from the content.</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  ),
}

export const WithImage: Story = {
  render: (args) => (
    <Card {...args}>
      <svg viewBox="0 0 160 80" className="aspect-2/1 w-full" role="img" aria-label="Cover">
        <rect width="160" height="80" fill="#c7d2fe" />
        <circle cx="120" cy="22" r="10" fill="#fde68a" />
        <path d="M0 80 L40 35 L75 65 L105 40 L160 80Z" fill="#818cf8" />
      </svg>
      <CardHeader>
        <CardTitle>Card with image</CardTitle>
        <CardDescription>The image sits flush against the top edge.</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const ContentOnly: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>A card containing only content.</CardContent>
    </Card>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>A very long card title that wraps across multiple lines in narrow cards</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="More">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  ),
}
