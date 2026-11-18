import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookOpenIcon, HomeIcon, LifeBuoyIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu'

const meta = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
  decorators: [
    (Story) => (
      <div className="min-h-72 w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const content = (
  <ul className="grid w-72 gap-1">
    <li>
      <NavigationMenuLink href="#intro">
        <HomeIcon />
        Introduction
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink href="#guides">
        <BookOpenIcon />
        Guides
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink href="#support" active>
        <LifeBuoyIcon />
        Support (active)
      </NavigationMenuLink>
    </li>
  </ul>
)

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>{content}</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>{content}</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#docs" className={navigationMenuTriggerStyle()}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const Open: Story = {
  render: (args) => (
    <NavigationMenu {...args} defaultValue="getting-started">
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>{content}</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>{content}</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#docs" className={navigationMenuTriggerStyle()}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const LinksOnly: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        {['Home', 'Pricing', 'Blog', 'Contact'].map((label) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink href={`#${label.toLowerCase()}`} className={navigationMenuTriggerStyle()}>
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#active" active className={navigationMenuTriggerStyle()}>
            Active
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const DisabledTrigger: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>Disabled</NavigationMenuTrigger>
          <NavigationMenuContent>{content}</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
