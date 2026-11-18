import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const items = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It follows the WAI-ARIA accordion pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. Panels animate open and closed. See the <a href="#">documentation</a> for details.
      </AccordionContent>
    </AccordionItem>
  </>
)

export const Default: Story = {
  render: (args) => <Accordion {...args}>{items}</Accordion>,
}

export const DefaultOpen: Story = {
  render: (args) => <Accordion {...args} defaultValue={['item-2']}>{items}</Accordion>,
}

export const Multiple: Story = {
  args: { multiple: true },
  render: (args) => <Accordion {...args} defaultValue={['item-1', 'item-3']}>{items}</Accordion>,
}

export const DisabledItem: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="a">
        <AccordionTrigger>Enabled item</AccordionTrigger>
        <AccordionContent>This item can be toggled.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b" disabled>
        <AccordionTrigger>Disabled item</AccordionTrigger>
        <AccordionContent>You cannot see this.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DisabledAll: Story = {
  args: { disabled: true },
  render: (args) => <Accordion {...args}>{items}</Accordion>,
}

export const LongContent: Story = {
  render: (args) => (
    <Accordion {...args} defaultValue={['long']}>
      <AccordionItem value="long">
        <AccordionTrigger>A very long trigger label that should wrap onto multiple lines when the container is narrow</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
