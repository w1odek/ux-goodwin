import type { Meta, StoryObj } from '@storybook/react-vite'
import { BarChart3Icon, SettingsIcon, UserIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: { defaultValue: 'account' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

function Panels() {
  return (
    <>
      <TabsContent value="account">Manage your account details here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="settings">Adjust application settings here.</TabsContent>
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}

export const Line: Story = {
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex gap-8">
      {(['default', 'line'] as const).map((variant) => (
        <Tabs key={variant} {...args} className="w-64">
          <TabsList variant={variant}>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <Panels />
        </Tabs>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon data-icon="inline-start" />
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          <BarChart3Icon data-icon="inline-start" />
          Analytics
        </TabsTrigger>
        <TabsTrigger value="settings">
          <SettingsIcon data-icon="inline-start" />
          Settings
        </TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args} className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <Panels />
    </Tabs>
  ),
}
