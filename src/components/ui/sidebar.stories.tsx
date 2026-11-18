import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BellIcon,
  CalendarIcon,
  ChevronsUpDownIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'
import type { ComponentProps } from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from './sidebar'

type SidebarProps = ComponentProps<typeof Sidebar>

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    side: { control: 'select', options: ['left', 'right'] },
    variant: { control: 'select', options: ['sidebar', 'floating', 'inset'] },
    collapsible: { control: 'select', options: ['offcanvas', 'icon', 'none'] },
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Inbox', icon: InboxIcon, badge: '12' },
  { title: 'Calendar', icon: CalendarIcon },
  { title: 'Search', icon: SearchIcon },
]

function Demo({
  defaultOpen = true,
  loading = false,
  ...props
}: SidebarProps & { defaultOpen?: boolean; loading?: boolean }) {
  const side = props.side ?? 'left'
  const content = (
    <>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Acme Inc">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">A</div>
              <span className="font-medium">Acme Inc</span>
              <ChevronsUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarInput placeholder="Search..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction title="Add">
            <PlusIcon />
            <span className="sr-only">Add</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={i === 0} tooltip={item.title} render={<a href="#" />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings" variant="outline">
                  <SettingsIcon />
                  <span>Settings</span>
                </SidebarMenuButton>
                <SidebarMenuAction>
                  <PlusIcon />
                  <span className="sr-only">Add</span>
                </SidebarMenuAction>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton isActive render={<a href="#" />}>
                      <span>General</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton size="sm" render={<a href="#" />}>
                      <span>Billing</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="sm" tooltip="Notifications">
                  <BellIcon />
                  <span>Notifications (sm)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton disabled tooltip="Disabled">
                  <UserIcon />
                  <span>Disabled</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {loading && (
          <SidebarGroup>
            <SidebarGroupLabel>Loading</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[0, 1, 2].map((i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Jane Doe">
              <UserIcon />
              <span>Jane Doe</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </>
  )

  return (
    // The transform makes the fixed-position sidebar relative to this frame.
    <div className="relative h-[600px] w-full overflow-hidden [transform:translateZ(0)]">
      <SidebarProvider defaultOpen={defaultOpen} className="h-full min-h-0">
        {side === 'left' && (
          <Sidebar {...props} className="h-full">
            {content}
          </Sidebar>
        )}
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">Dashboard</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            Main content ({props.variant ?? 'sidebar'}, {props.collapsible ?? 'offcanvas'}, {side}).
          </div>
        </SidebarInset>
        {side === 'right' && (
          <Sidebar {...props} className="h-full">
            {content}
          </Sidebar>
        )}
      </SidebarProvider>
    </div>
  )
}

export const Default: Story = {
  render: (args) => <Demo {...args} />,
}

export const CollapsibleIcon: Story = {
  args: { collapsible: 'icon' },
  render: (args) => <Demo {...args} />,
}

export const CollapsibleIconCollapsed: Story = {
  args: { collapsible: 'icon' },
  render: (args) => <Demo {...args} defaultOpen={false} />,
}

export const CollapsibleOffcanvasCollapsed: Story = {
  args: { collapsible: 'offcanvas' },
  render: (args) => <Demo {...args} defaultOpen={false} />,
}

export const CollapsibleNone: Story = {
  args: { collapsible: 'none' },
  render: (args) => <Demo {...args} />,
}

export const Floating: Story = {
  args: { variant: 'floating' },
  render: (args) => <Demo {...args} />,
}

export const Inset: Story = {
  args: { variant: 'inset' },
  render: (args) => <Demo {...args} />,
}

export const RightSide: Story = {
  args: { side: 'right' },
  render: (args) => <Demo {...args} />,
}

export const RightSideIcon: Story = {
  args: { side: 'right', collapsible: 'icon', variant: 'floating' },
  render: (args) => <Demo {...args} />,
}

export const WithSkeleton: Story = {
  render: (args) => <Demo {...args} loading />,
}
