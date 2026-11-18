import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, InfoIcon, XIcon } from 'lucide-react'

import { Alert, AlertAction, AlertDescription, AlertTitle } from './alert'
import { Button } from './button'

const variants = ['default', 'destructive'] as const

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
  },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <Alert key={variant} {...args} variant={variant}>
          <AlertCircleIcon />
          <AlertTitle>{variant}</AlertTitle>
          <AlertDescription>This is the {variant} alert variant.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment</AlertTitle>
      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
      </AlertDescription>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>No icon</AlertTitle>
      <AlertDescription>An alert without a leading icon.</AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>A short title-only alert</AlertTitle>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>New version available</AlertTitle>
      <AlertDescription>Update to get the latest features and fixes.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Update
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const WithDismissAction: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>Session expired</AlertTitle>
      <AlertDescription>Please sign in again to continue.</AlertDescription>
      <AlertAction>
        <Button size="icon-xs" variant="ghost" aria-label="Dismiss">
          <XIcon />
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>A considerably longer alert title that may wrap onto a second line in narrow containers</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </AlertDescription>
    </Alert>
  ),
}
