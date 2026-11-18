import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, ClockIcon, FileTextIcon, SearchIcon, TerminalIcon, TriangleAlertIcon, Loader2Icon } from 'lucide-react'

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from './trace'

const statuses = [undefined, 'running', 'pending', 'error'] as const

const meta = {
  title: 'UI/Trace',
  component: Trace,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Trace>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Trace {...args}>
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched the codebase</TraceTitle>
        <TraceDescription>1.2s</TraceDescription>
      </TraceLine>
    </Trace>
  ),
}

export const Statuses: Story = {
  render: (args) => (
    <Trace {...args}>
      <TraceLine>
        <TraceIcon>
          <CheckIcon />
        </TraceIcon>
        <TraceTitle>Done (default)</TraceTitle>
        <TraceDescription>0.8s</TraceDescription>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <Loader2Icon className="animate-spin" />
        </TraceIcon>
        <TraceTitle>Running (shimmer)</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <ClockIcon />
        </TraceIcon>
        <TraceTitle>Pending</TraceTitle>
      </TraceLine>
      <TraceLine status="error">
        <TraceIcon>
          <TriangleAlertIcon />
        </TraceIcon>
        <TraceTitle>Failed to run command</TraceTitle>
        <TraceDescription>exit 1</TraceDescription>
      </TraceLine>
    </Trace>
  ),
}

export const Interactive: Story = {
  render: (args) => (
    <Trace {...args}>
      <button type="button">
        <TraceLine>
          <TraceIcon>
            <FileTextIcon />
          </TraceIcon>
          <TraceTitle>Read src/index.ts</TraceTitle>
          <TraceDescription>120 lines</TraceDescription>
        </TraceLine>
      </button>
      <a href="#example">
        <TraceLine status="error">
          <TraceIcon>
            <TriangleAlertIcon />
          </TraceIcon>
          <TraceTitle>View error log</TraceTitle>
        </TraceLine>
      </a>
    </Trace>
  ),
}

export const Collapsible: Story = {
  render: (args) => (
    <Trace {...args}>
      {statuses.map((status) => (
        <TraceCollapsible key={status ?? 'default'}>
          <TraceCollapsibleTrigger>
            <TraceLine status={status}>
              <TraceIcon>
                <TerminalIcon />
              </TraceIcon>
              <TraceTitle>Ran command ({status ?? 'default'})</TraceTitle>
              <TraceDescription>2.4s</TraceDescription>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <p>npm run build</p>
            <p>Output details are shown here when the trace is expanded.</p>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      ))}
    </Trace>
  ),
}

export const CollapsibleOpen: Story = {
  render: (args) => (
    <Trace {...args}>
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <SearchIcon />
            </TraceIcon>
            <TraceTitle>Thought for 4 seconds</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          I looked at the component structure and decided to split the logic into two smaller helpers so each one is easy to test.
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  ),
}

export const LongTitleTruncates: Story = {
  render: (args) => (
    <div className="w-64">
      <Trace {...args}>
        <TraceLine>
          <TraceIcon>
            <FileTextIcon />
          </TraceIcon>
          <TraceTitle>Read src/components/very/long/path/to/some/deeply/nested/file.tsx</TraceTitle>
          <TraceDescription>42 lines</TraceDescription>
        </TraceLine>
      </Trace>
    </div>
  ),
}
