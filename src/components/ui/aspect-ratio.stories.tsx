import type { Meta, StoryObj } from '@storybook/react-vite'

import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: { type: 'number', min: 0.25, max: 4, step: 0.05 } },
  },
  args: { ratio: 16 / 9 },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

const placeholder = (label: string) => (
  <div className="flex size-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
    {label}
  </div>
)

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <div className="absolute inset-0">{placeholder('16:9')}</div>
    </AspectRatio>
  ),
}

export const Ratios: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {(
        [
          ['1:1', 1],
          ['4:3', 4 / 3],
          ['16:9', 16 / 9],
          ['21:9', 21 / 9],
          ['3:4 (portrait)', 3 / 4],
        ] as const
      ).map(([label, ratio]) => (
        <AspectRatio key={label} {...args} ratio={ratio} className={ratio < 1 ? 'w-40' : undefined}>
          <div className="absolute inset-0">{placeholder(label)}</div>
        </AspectRatio>
      ))}
    </div>
  ),
}

export const WithInlineSvg: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <svg viewBox="0 0 160 90" className="absolute inset-0 size-full rounded-lg" role="img" aria-label="Landscape">
        <rect width="160" height="90" fill="#bfdbfe" />
        <circle cx="125" cy="22" r="10" fill="#fde68a" />
        <path d="M0 90 L45 40 L80 75 L110 45 L160 90 Z" fill="#4ade80" />
      </svg>
    </AspectRatio>
  ),
}
