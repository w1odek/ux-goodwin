import type { Meta, StoryObj } from '@storybook/react-vite'
import { CopyIcon, MailIcon, SearchIcon, SendIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group'

const aligns = ['inline-start', 'inline-end', 'block-start', 'block-end'] as const
const buttonSizes = ['xs', 'sm', 'icon-xs', 'icon-sm'] as const

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const AddonAlignments: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {aligns.map((align) => (
        <InputGroup key={align} {...args}>
          {align === 'inline-start' || align === 'inline-end' ? (
            <InputGroupInput placeholder={align} />
          ) : (
            <InputGroupTextarea placeholder={align} />
          )}
          <InputGroupAddon align={align}>
            <InputGroupText>{align}</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      ))}
    </div>
  ),
}

export const WithText: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <InputGroup {...args}>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup {...args}>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <InputGroup {...args}>
        <InputGroupInput defaultValue="https://example.com/share" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup {...args}>
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const ButtonSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {buttonSizes.map((size) => (
        <InputGroup key={size} {...args}>
          <InputGroupInput placeholder={`size: ${size}`} />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size={size} variant="outline" aria-label={size}>
              {size.startsWith('icon') ? <SendIcon /> : 'Send'}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      ))}
    </div>
  ),
}

export const Textarea: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupTextarea placeholder="Write a message..." rows={3} />
      <InputGroupAddon align="block-end">
        <InputGroupText>0 / 280</InputGroupText>
        <InputGroupButton variant="default" size="sm" className="ml-auto">
          <SendIcon />
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Disabled" disabled />
    </InputGroup>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput defaultValue="not-an-email" aria-invalid />
    </InputGroup>
  ),
}
