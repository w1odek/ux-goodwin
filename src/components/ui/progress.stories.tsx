import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'

import { Progress, ProgressLabel, ProgressValue } from './progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: { value: 40 },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabelAndValue: Story = {
  render: (args) => (
    <Progress {...args}>
      <ProgressLabel>Uploading</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const Values: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {[0, 25, 50, 75, 100].map((value) => (
        <Progress key={value} {...args} value={value}>
          <ProgressLabel>{value}%</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  ),
}

export const Indeterminate: Story = {
  args: { value: null },
  render: (args) => (
    <Progress {...args}>
      <ProgressLabel>Loading</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const CustomRange: Story = {
  args: { value: 30, min: 0, max: 60 },
  render: (args) => (
    <Progress {...args}>
      <ProgressLabel>Step 30 of 60</ProgressLabel>
      <ProgressValue>{(_, v) => `${v} / 60`}</ProgressValue>
    </Progress>
  ),
}

function Animated(props: React.ComponentProps<typeof Progress>) {
  const [value, setValue] = React.useState(10)
  React.useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 10)), 800)
    return () => clearInterval(id)
  }, [])
  return (
    <Progress {...props} value={value}>
      <ProgressLabel>Processing</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

export const Animation: Story = {
  render: (args) => <Animated {...args} />,
}
