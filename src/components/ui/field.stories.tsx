import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field'
import { Input } from './input'
import { Button } from './button'

const orientations = ['vertical', 'horizontal', 'responsive'] as const

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: orientations },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="jane" />
      <FieldDescription>Choose a unique username for your account.</FieldDescription>
    </Field>
  ),
}

export const Orientations: Story = {
  render: (args) => (
    <FieldGroup>
      {orientations.map((orientation) => (
        <Field key={orientation} {...args} orientation={orientation}>
          <FieldLabel htmlFor={`o-${orientation}`}>{orientation}</FieldLabel>
          <Input id={`o-${orientation}`} placeholder={orientation} />
        </Field>
      ))}
    </FieldGroup>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <Field {...args} data-invalid="true">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" aria-invalid defaultValue="not-an-email" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  ),
}

export const ErrorsList: Story = {
  render: (args) => (
    <Field {...args} data-invalid="true">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" aria-invalid />
      <FieldError
        errors={[
          { message: 'Must be at least 8 characters' },
          { message: 'Must contain a number' },
          { message: 'Must contain a number' },
        ]}
      />
    </Field>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Field {...args} data-disabled="true">
      <FieldLabel htmlFor="disabled">Disabled field</FieldLabel>
      <Input id="disabled" disabled defaultValue="Cannot edit" />
      <FieldDescription>This field is currently unavailable.</FieldDescription>
    </Field>
  ),
}

export const HorizontalWithContent: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>You agree to our Terms of Service and Privacy Policy.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const CardLabel: Story = {
  name: 'Selectable card (FieldTitle)',
  render: () => (
    <FieldGroup>
      {['Starter', 'Pro'].map((plan) => (
        <FieldLabel key={plan} htmlFor={`plan-${plan}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{plan}</FieldTitle>
              <FieldDescription>Best for {plan === 'Starter' ? 'individuals' : 'teams'}.</FieldDescription>
            </FieldContent>
            <Checkbox id={`plan-${plan}`} defaultChecked={plan === 'Pro'} />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  ),
}

export const FieldSetWithLegend: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Address</FieldLegend>
      <FieldDescription>We will use this address for shipping.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">Street</FieldLabel>
          <Input id="street" placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Postal code</FieldLabel>
            <Input id="zip" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  ),
}

export const LegendLabelVariant: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend variant="label">Notifications</FieldLegend>
      <FieldDescription>Select how you want to be notified.</FieldDescription>
      <FieldGroup className="gap-3">
        {['Email', 'SMS', 'Push'].map((item) => (
          <Field key={item} orientation="horizontal">
            <Checkbox id={`n-${item}`} />
            <FieldLabel htmlFor={`n-${item}`} className="font-normal">
              {item}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="s-email">Email</FieldLabel>
        <Input id="s-email" type="email" />
      </Field>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Field>
        <Button variant="outline">Continue with provider</Button>
      </Field>
      <FieldSeparator />
      <Field>
        <Button>Submit</Button>
      </Field>
    </FieldGroup>
  ),
}
