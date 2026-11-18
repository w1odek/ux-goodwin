import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, FileTextIcon, ImageIcon, XIcon } from 'lucide-react'

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from './attachment'
import { Spinner } from './spinner'

const sizes = ['default', 'sm', 'xs'] as const
const orientations = ['horizontal', 'vertical'] as const
const states = ['idle', 'uploading', 'processing', 'error', 'done'] as const

const meta = {
  title: 'UI/Attachment',
  component: Attachment,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizes },
    orientation: { control: 'select', options: orientations },
    state: { control: 'select', options: states },
  },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

const imageSrc =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#93c5fd"/><circle cx="28" cy="12" r="5" fill="#fde68a"/><path d="M0 40 L14 20 L26 34 L33 26 L40 40Z" fill="#22c55e"/></svg>'
  )

export const Default: Story = {
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>report.pdf</AttachmentTitle>
        <AttachmentDescription>PDF - 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <Attachment key={size} {...args} size={size}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{size}.pdf</AttachmentTitle>
            <AttachmentDescription>PDF - 2.4 MB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  ),
}

export const Orientations: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-start gap-4">
      {orientations.map((orientation) => (
        <Attachment key={orientation} {...args} orientation={orientation}>
          <AttachmentMedia variant="image">
            <img src={imageSrc} alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>photo.png</AttachmentTitle>
            <AttachmentDescription>{orientation}</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </div>
  ),
}

export const VerticalMediaOnly: Story = {
  render: (args) => (
    <div className="flex gap-3">
      <Attachment {...args} orientation="vertical">
        <AttachmentMedia variant="image">
          <img src={imageSrc} alt="Preview" />
        </AttachmentMedia>
      </Attachment>
      <Attachment {...args} orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
      </Attachment>
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-3">
      {states.map((state) => (
        <Attachment key={state} {...args} state={state}>
          <AttachmentMedia>
            {state === 'uploading' || state === 'processing' ? (
              <Spinner />
            ) : state === 'error' ? (
              <AlertCircleIcon />
            ) : (
              <FileTextIcon />
            )}
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{state}.pdf</AttachmentTitle>
            <AttachmentDescription>
              {state === 'error' ? 'Upload failed' : state === 'idle' ? 'Waiting' : state}
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  ),
}

export const ImageVariant: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-3">
      {(['done', 'uploading'] as const).map((state) => (
        <Attachment key={state} {...args} state={state}>
          <AttachmentMedia variant="image">
            <img src={imageSrc} alt="" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>photo.png</AttachmentTitle>
            <AttachmentDescription>{state}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  ),
}

export const WithTrigger: Story = {
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>clickable.pdf</AttachmentTitle>
        <AttachmentDescription>Click to open</AttachmentDescription>
      </AttachmentContent>
      <AttachmentTrigger aria-label="Open clickable.pdf" />
    </Attachment>
  ),
}

export const LongTitle: Story = {
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>a-very-long-file-name-that-needs-to-be-truncated-2026-final-v3.pdf</AttachmentTitle>
        <AttachmentDescription>A long description that is also truncated by the layout</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const Group: Story = {
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <AttachmentGroup>
      {['alpha', 'beta', 'gamma', 'delta'].map((name) => (
        <Attachment key={name} {...args}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{name}.pdf</AttachmentTitle>
            <AttachmentDescription>1.2 MB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  ),
}
