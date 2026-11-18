import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import { Toaster, toast } from './toast'

const meta = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

const types = ['default', 'success', 'info', 'warning', 'error', 'loading'] as const

export const Default: Story = {
  render: (args) => (
    <Toaster {...args}>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: 'Event created',
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show toast
      </Button>
    </Toaster>
  ),
}

export const Types: Story = {
  render: (args) => (
    <Toaster {...args}>
      <div className="flex flex-wrap gap-3">
        {types.map((type) => (
          <Button
            key={type}
            variant="outline"
            onClick={() =>
              toast.add({
                type: type === 'default' ? undefined : type,
                title: `${type} toast`,
                description: `This is a ${type} notification.`,
                timeout: type === 'loading' ? 0 : 5000,
              })
            }
          >
            {type}
          </Button>
        ))}
      </div>
    </Toaster>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <Toaster {...args}>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: 'Message archived',
            description: 'The conversation was moved to the archive.',
            actionProps: { children: 'Undo', onClick: () => toast.add({ type: 'success', title: 'Restored' }) },
          })
        }
      >
        Archive with undo
      </Button>
    </Toaster>
  ),
}

export const Persistent: Story = {
  render: (args) => (
    <Toaster {...args}>
      <Button variant="outline" onClick={() => toast.add({ title: 'Stays until closed', timeout: 0 })}>
        Show persistent toast
      </Button>
    </Toaster>
  ),
}

export const Stacked: Story = {
  render: (args) => (
    <Toaster {...args}>
      <Button
        variant="outline"
        onClick={() => {
          types.slice(1, 5).forEach((type) =>
            toast.add({ type, title: `${type} toast`, description: 'Hover the stack to expand it.', timeout: 0 }),
          )
        }}
      >
        Show several toasts
      </Button>
    </Toaster>
  ),
}

export const PromiseToast: Story = {
  render: (args) => (
    <Toaster {...args}>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise<string>((resolve) => setTimeout(() => resolve('done'), 1500)), {
            loading: 'Saving...',
            success: 'Saved successfully',
            error: 'Could not save',
          })
        }
      >
        Run promise
      </Button>
    </Toaster>
  ),
}
