import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const variants = ['default', 'outline'] as const
const sizes = ['sm', 'default', 'lg'] as const

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    spacing: { control: 'number' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

function FormatItems() {
  return (
    <>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args} multiple>
      <FormatItems />
    </ToggleGroup>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <ToggleGroup key={variant} {...args} variant={variant} defaultValue={['bold']}>
          <FormatItems />
        </ToggleGroup>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <ToggleGroup key={size} {...args} size={size} variant="outline">
          <FormatItems />
        </ToggleGroup>
      ))}
    </div>
  ),
}

export const Attached: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <ToggleGroup key={variant} {...args} variant={variant} spacing={0} defaultValue={['italic']}>
          <FormatItems />
        </ToggleGroup>
      ))}
    </div>
  ),
}

export const SingleSelection: Story = {
  render: (args) => (
    <ToggleGroup {...args} variant="outline" spacing={0} defaultValue={['left']}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="flex gap-8">
      <ToggleGroup {...args} orientation="vertical" variant="outline" spacing={0}>
        <FormatItems />
      </ToggleGroup>
      <ToggleGroup {...args} orientation="vertical" variant="outline">
        <FormatItems />
      </ToggleGroup>
    </div>
  ),
}

export const WithText: Story = {
  render: (args) => (
    <ToggleGroup {...args} variant="outline" multiple>
      <ToggleGroupItem value="bold">
        <BoldIcon data-icon="inline-start" />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon data-icon="inline-start" />
        Italic
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleGroup {...args} variant="outline" disabled>
        <FormatItems />
      </ToggleGroup>
      <ToggleGroup {...args} variant="outline">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic" disabled>
          <ItalicIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}
