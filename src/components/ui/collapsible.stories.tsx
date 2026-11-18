import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDownIcon } from 'lucide-react'

import { Button } from './button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

const items = ['@radix-ui/primitives', '@base-ui/react', '@storybook/react-vite']

function Demo(props: React.ComponentProps<typeof Collapsible>) {
  return (
    <Collapsible className="flex flex-col gap-2" {...props}>
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">3 repositories starred</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-3 py-2 text-sm">{items[0]}</div>
      <CollapsibleContent className="flex flex-col gap-2">
        {items.slice(1).map((item) => (
          <div key={item} className="rounded-md border px-3 py-2 text-sm">
            {item}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Default: Story = {
  render: (args) => <Demo {...args} />,
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: (args) => <Demo {...args} />,
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <Demo {...args} />,
}

export const TextTrigger: Story = {
  render: (args) => (
    <Collapsible {...args} className="flex flex-col gap-2">
      <CollapsibleTrigger render={<Button variant="outline" />}>
        Show details
      </CollapsibleTrigger>
      <CollapsibleContent className="text-sm text-muted-foreground">
        Hidden details appear here once the trigger is activated. This content can be any
        length and may include other components.
      </CollapsibleContent>
    </Collapsible>
  ),
}
