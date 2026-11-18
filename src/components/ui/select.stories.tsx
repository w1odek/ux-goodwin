import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppleIcon, BananaIcon, CherryIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-start">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
]

function FruitItems() {
  return (
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      {fruits.map((f) => (
        <SelectItem key={f.value} value={f.value}>
          {f.label}
        </SelectItem>
      ))}
    </SelectGroup>
  )
}

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <FruitItems />
      </SelectContent>
    </Select>
  ),
}

export const Open: Story = {
  render: (args) => (
    <Select {...args} defaultOpen defaultValue="banana">
      <SelectTrigger className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <FruitItems />
      </SelectContent>
    </Select>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {(['sm', 'default'] as const).map((size) => (
        <Select key={size} {...args}>
          <SelectTrigger size={size} className="w-40">
            <SelectValue placeholder={`Size ${size}`} />
          </SelectTrigger>
          <SelectContent>
            <FruitItems />
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
}

export const GroupsAndSeparator: Story = {
  render: (args) => (
    <Select {...args} defaultOpen>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">
            <AppleIcon /> Apple
          </SelectItem>
          <SelectItem value="banana">
            <BananaIcon /> Banana
          </SelectItem>
          <SelectItem value="cherry">
            <CherryIcon /> Cherry
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli" disabled>
            Broccoli (unavailable)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} disabled>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <FruitItems />
      </SelectContent>
    </Select>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-48" aria-invalid>
        <SelectValue placeholder="Invalid" />
      </SelectTrigger>
      <SelectContent>
        <FruitItems />
      </SelectContent>
    </Select>
  ),
}

export const LongList: Story = {
  render: (args) => (
    <Select {...args} defaultOpen>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a number" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="max-h-48">
        {Array.from({ length: 30 }, (_, i) => (
          <SelectItem key={i} value={String(i + 1)}>
            Option {i + 1}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
}
