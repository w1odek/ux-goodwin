import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { DateRange } from 'react-day-picker'

import { Calendar } from './calendar'

const buttonVariants = ['ghost', 'outline', 'secondary', 'default'] as const
const captionLayouts = ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const

// Fixed month so snapshots are deterministic.
const month = new Date(2026, 5, 1)

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    captionLayout: { control: 'select', options: captionLayouts },
    buttonVariant: { control: 'select', options: buttonVariants },
    showOutsideDays: { control: 'boolean' },
    showWeekNumber: { control: 'boolean' },
  },
  args: { defaultMonth: month },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

function Single(props: React.ComponentProps<typeof Calendar>) {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 5, 12))
  return (
    <Calendar
      {...(props as object)}
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}

export const Default: Story = {
  render: (args) => <Single {...args} />,
}

export const NoSelection: Story = {
  args: { className: 'rounded-lg border' },
}

export const Range: Story = {
  render: (args) => {
    const Comp = () => {
      const [range, setRange] = React.useState<DateRange | undefined>({
        from: new Date(2026, 5, 8),
        to: new Date(2026, 5, 15),
      })
      return (
        <Calendar
          {...(args as object)}
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-lg border"
        />
      )
    }
    return <Comp />
  },
}

export const Multiple: Story = {
  render: (args) => {
    const Comp = () => {
      const [dates, setDates] = React.useState<Date[] | undefined>([
        new Date(2026, 5, 3),
        new Date(2026, 5, 10),
        new Date(2026, 5, 24),
      ])
      return (
        <Calendar
          {...(args as object)}
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-lg border"
        />
      )
    }
    return <Comp />
  },
}

export const TwoMonths: Story = {
  render: (args) => <Calendar {...args} numberOfMonths={2} className="rounded-lg border" />,
}

export const DropdownCaption: Story = {
  args: { captionLayout: 'dropdown', startMonth: new Date(2020, 0), endMonth: new Date(2030, 11) },
  render: (args) => <Single {...args} />,
}

export const WeekNumbers: Story = {
  args: { showWeekNumber: true },
  render: (args) => <Single {...args} />,
}

export const HideOutsideDays: Story = {
  args: { showOutsideDays: false },
  render: (args) => <Single {...args} />,
}

export const ButtonVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {buttonVariants.map((buttonVariant) => (
        <Calendar key={buttonVariant} {...args} buttonVariant={buttonVariant} className="rounded-lg border" />
      ))}
    </div>
  ),
}

export const DisabledDates: Story = {
  args: {
    disabled: [{ dayOfWeek: [0, 6] }, { before: new Date(2026, 5, 5) }],
    className: 'rounded-lg border',
  },
}
