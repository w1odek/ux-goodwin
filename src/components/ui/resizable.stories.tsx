import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable'

const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
  decorators: [
    (Story) => (
      <div className="h-64 w-96 rounded-lg border">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

const Pane = ({ children }: { children: string }) => (
  <div className="flex h-full items-center justify-center p-4">
    <span className="font-semibold">{children}</span>
  </div>
)

export const Horizontal: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="horizontal">
      <ResizablePanel defaultSize={50}>
        <Pane>One</Pane>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <Pane>Two</Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="vertical">
      <ResizablePanel defaultSize={30}>
        <Pane>Header</Pane>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <Pane>Content</Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="horizontal">
      <ResizablePanel defaultSize={50}>
        <Pane>One</Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Pane>Two</Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const VerticalWithHandle: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="vertical">
      <ResizablePanel defaultSize={50}>
        <Pane>Top</Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Pane>Bottom</Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="horizontal">
      <ResizablePanel defaultSize={25} minSize={15}>
        <Pane>Sidebar</Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Pane>Main</Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <Pane>Aside</Pane>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Nested: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} orientation="horizontal">
      <ResizablePanel defaultSize={40}>
        <Pane>Left</Pane>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={50}>
            <Pane>Top right</Pane>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <Pane>Bottom right</Pane>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
