import type { Meta, StoryObj } from '@storybook/react-vite'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './chart'

const indicators = ['dot', 'line', 'dashed'] as const

const config = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
} satisfies ChartConfig

const meta = {
  title: 'UI/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  // `children` is required by the component type; every story overrides it in `render`.
  args: { config: {}, children: <BarChart data={[]} /> },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const themedConfig = {
  desktop: { label: 'Desktop', theme: { light: '#2563eb', dark: '#60a5fa' } },
  mobile: { label: 'Mobile', theme: { light: '#16a34a', dark: '#4ade80' } },
} satisfies ChartConfig

const tick = (v: string) => v.slice(0, 3)

export const Bars: Story = {
  args: { config },
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={tick} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const Lines: Story = {
  args: { config },
  render: (args) => (
    <ChartContainer {...args}>
      <LineChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={tick} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}

export const Areas: Story = {
  args: { config },
  render: (args) => (
    <ChartContainer {...args}>
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={tick} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area dataKey="mobile" type="natural" fill="var(--color-mobile)" fillOpacity={0.4} stroke="var(--color-mobile)" stackId="a" />
        <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
      </AreaChart>
    </ChartContainer>
  ),
}

export const Pies: Story = {
  args: {
    config: {
      chrome: { label: 'Chrome', color: 'var(--chart-1)' },
      safari: { label: 'Safari', color: 'var(--chart-2)' },
      firefox: { label: 'Firefox', color: 'var(--chart-3)' },
      other: { label: 'Other', color: 'var(--chart-4)' },
    },
    className: 'mx-auto aspect-square max-h-64',
  },
  render: (args) => (
    <ChartContainer {...args}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel nameKey="browser" />} />
        <Pie
          data={[
            { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
            { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
            { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
            { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
          ]}
          dataKey="visitors"
          nameKey="browser"
        />
        <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
      </PieChart>
    </ChartContainer>
  ),
}

export const ThemedColors: Story = {
  args: { config: themedConfig },
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={tick} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const TooltipIndicators: Story = {
  args: { config },
  render: (args) => (
    <div className="flex flex-col gap-4">
      {indicators.map((indicator) => (
        <ChartContainer key={indicator} {...args} className="aspect-[3/1]">
          <BarChart data={data} accessibilityLayer>
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickFormatter={tick} />
            <ChartTooltip defaultIndex={2} content={<ChartTooltipContent indicator={indicator} />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      ))}
    </div>
  ),
}

export const Empty: Story = {
  args: { config },
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={[]}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </ChartContainer>
  ),
}
