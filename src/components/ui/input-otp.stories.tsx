import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp'

const meta = {
  title: 'UI/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
  args: { maxLength: 6, children: null },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const FourDigits: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        {[0, 1, 2, 3].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Prefilled: Story = {
  render: () => (
    <InputOTP maxLength={6} defaultValue="123">
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled defaultValue="12">
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Invalid: Story = {
  render: () => (
    <InputOTP maxLength={6} defaultValue="123456">
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} aria-invalid />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

function ControlledDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col items-start gap-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        {value === '' ? 'Enter your one-time password.' : `You entered: ${value}`}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
}
