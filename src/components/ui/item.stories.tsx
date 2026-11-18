import type { Meta, StoryObj } from '@storybook/react-vite'
import { BellIcon, ChevronRightIcon, FileTextIcon, ShieldCheckIcon } from 'lucide-react'

import { Button } from './button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item'

const variants = ['default', 'outline', 'muted'] as const
const sizes = ['default', 'sm', 'xs'] as const
const mediaVariants = ['default', 'icon', 'image'] as const

const meta = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
  },
  args: { variant: 'outline' },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <ShieldCheckIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security review</ItemTitle>
        <ItemDescription>Your account was checked for suspicious activity.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <ItemGroup>
      {variants.map((variant) => (
        <Item key={variant} {...args} variant={variant}>
          <ItemContent>
            <ItemTitle>{variant}</ItemTitle>
            <ItemDescription>Item with the {variant} variant.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <ItemGroup>
      {sizes.map((size) => (
        <Item key={size} {...args} size={size}>
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Size {size}</ItemTitle>
            <ItemDescription>Description text for the {size} size.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  ),
}

export const MediaVariants: Story = {
  render: (args) => (
    <ItemGroup>
      {mediaVariants.map((media) => (
        <Item key={media} {...args}>
          <ItemMedia variant={media}>
            {media === 'image' ? (
              <div className="size-full bg-linear-to-br from-primary/60 to-muted" />
            ) : (
              <FileTextIcon className="size-4" />
            )}
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media {media}</ItemTitle>
            <ItemDescription>ItemMedia with the {media} variant.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemHeader>
        <span className="text-xs text-muted-foreground">Project</span>
        <span className="text-xs text-muted-foreground">Updated today</span>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Quarterly report</ItemTitle>
        <ItemDescription>A summary of the work completed during the quarter.</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span className="text-xs text-muted-foreground">3 collaborators</span>
        <Button size="xs" variant="ghost">
          Open
        </Button>
      </ItemFooter>
    </Item>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <Item {...args} render={<a href="#link" />}>
      <ItemMedia variant="icon">
        <FileTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Documentation</ItemTitle>
        <ItemDescription>Rendered as an anchor element.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>A very long item title that should be truncated when it does not fit the container</ItemTitle>
        <ItemDescription>
          This description is intentionally long so that it is clamped to two lines. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const GroupWithSeparators: Story = {
  render: (args) => (
    <ItemGroup>
      {['Profile', 'Notifications', 'Billing'].map((name, i) => (
        <div key={name}>
          <Item {...args} variant="default">
            <ItemContent>
              <ItemTitle>{name}</ItemTitle>
              <ItemDescription>Manage your {name.toLowerCase()} settings.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
          {i < 2 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  ),
}
