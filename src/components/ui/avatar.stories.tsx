import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusIcon, UserIcon } from 'lucide-react'

import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './avatar'

const sizes = ['sm', 'default', 'lg'] as const

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizes },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// Inline SVG data URI so no network is needed.
const imageSrc =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#6366f1"/><circle cx="20" cy="16" r="7" fill="#e0e7ff"/><path d="M6 40c2-10 8-14 14-14s12 4 14 14z" fill="#e0e7ff"/></svg>'
  )

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={imageSrc} alt="User" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const FallbackIcon: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>
        <UserIcon className="size-4" />
      </AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {sizes.map((size) => (
        <Avatar key={size} {...args} size={size}>
          <AvatarImage src={imageSrc} alt={size} />
          <AvatarFallback>{size[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const FallbackSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {sizes.map((size) => (
        <Avatar key={size} {...args} size={size}>
          <AvatarFallback>{size.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const WithBadge: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {sizes.map((size) => (
        <Avatar key={size} {...args} size={size}>
          <AvatarImage src={imageSrc} alt={size} />
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      ))}
      <Avatar {...args} size="lg">
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <AvatarGroup key={size}>
          {['AB', 'CD', 'EF'].map((initials) => (
            <Avatar key={initials} {...args} size={size}>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      ))}
    </div>
  ),
}

export const GroupWithIconCount: Story = {
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args}>
        <AvatarImage src={imageSrc} alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  ),
}
