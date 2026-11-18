import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArchiveIcon, ChevronDownIcon, MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from './button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'

const orientations = ['horizontal', 'vertical'] as const

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: orientations },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const Orientations: Story = {
  render: (args) => (
    <div className="flex items-start gap-8">
      {orientations.map((orientation) => (
        <ButtonGroup key={orientation} {...args} orientation={orientation}>
          <Button variant="outline">One</Button>
          <Button variant="outline">Two</Button>
          <Button variant="outline">Three</Button>
        </ButtonGroup>
      ))}
    </div>
  ),
}

export const WithText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>Quantity</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="Decrease">
        <MinusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Increase">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">
        <ArchiveIcon data-icon="inline-start" />
        Archive
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon" aria-label="More options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const VerticalWithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args} orientation="vertical">
      <Button variant="secondary">First</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="secondary">Second</Button>
    </ButtonGroup>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
        <ButtonGroup key={size} {...args}>
          <Button variant="outline" size={size}>
            {size}
          </Button>
          <Button variant="outline" size={size}>
            Group
          </Button>
        </ButtonGroup>
      ))}
    </div>
  ),
}

export const Nested: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">3</Button>
        <Button variant="outline">4</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </ButtonGroup>
  ),
}
