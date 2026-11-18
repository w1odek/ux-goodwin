import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileCodeIcon, TerminalIcon, TriangleAlertIcon } from 'lucide-react'

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFooter,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from './code-block'

const variants = ['default', 'destructive'] as const
const sizes = ['default', 'sm'] as const

const sample = `function greet(name: string) {
  const message = \`Hello, \${name}!\`
  console.log(message)
  return message
}

greet('world')
`

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockContent>{sample}</CodeBlockContent>
    </CodeBlock>
  ),
}

export const WithHeader: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <FileCodeIcon />
          greet.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={sample} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>{sample}</CodeBlockContent>
    </CodeBlock>
  ),
}

export const WithFooter: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <TerminalIcon />
          Terminal
        </CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent>{'npm install my-package\nnpm run build'}</CodeBlockContent>
      <CodeBlockFooter>
        <span className="text-xs">2 commands</span>
      </CodeBlockFooter>
    </CodeBlock>
  ),
}

export const FloatingActions: Story = {
  name: 'Floating copy button (hover)',
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockActions>
        <CodeBlockCopyButton value={sample} />
      </CodeBlockActions>
      <CodeBlockContent>{sample}</CodeBlockContent>
    </CodeBlock>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <CodeBlock key={variant} {...args} variant={variant}>
          <CodeBlockHeader>
            <CodeBlockTitle>{variant}</CodeBlockTitle>
            <CodeBlockActions>
              <CodeBlockCopyButton value={sample} />
            </CodeBlockActions>
          </CodeBlockHeader>
          <CodeBlockContent>{sample}</CodeBlockContent>
        </CodeBlock>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <CodeBlock key={size} {...args} size={size}>
          <CodeBlockHeader>
            <CodeBlockTitle>size: {size}</CodeBlockTitle>
            <CodeBlockActions>
              <CodeBlockCopyButton value={sample} />
            </CodeBlockActions>
          </CodeBlockHeader>
          <CodeBlockContent>{sample}</CodeBlockContent>
          <CodeBlockFooter>Footer</CodeBlockFooter>
        </CodeBlock>
      ))}
    </div>
  ),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <TriangleAlertIcon />
          Error
        </CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent>
        {"TypeError: Cannot read properties of undefined (reading 'name')\n    at greet (greet.ts:2:30)"}
      </CodeBlockContent>
    </CodeBlock>
  ),
}

export const LineNumbers: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockContent lineNumbers>{sample}</CodeBlockContent>
    </CodeBlock>
  ),
}

export const LineNumbersFromStartLine: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockContent lineNumbers startLine={42}>
        {sample}
      </CodeBlockContent>
    </CodeBlock>
  ),
}

export const LineVariants: Story = {
  name: 'Line variants (diff / highlight)',
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockHeader>
        <CodeBlockTitle>diff</CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>
        <CodeBlockLine>{'const a = 1'}</CodeBlockLine>
        <CodeBlockLine variant="removed">{'const b = 2'}</CodeBlockLine>
        <CodeBlockLine variant="added">{'const b = 3'}</CodeBlockLine>
        <CodeBlockLine variant="highlighted">{'console.log(a + b)'}</CodeBlockLine>
        <CodeBlockLine />
        <CodeBlockLine>{'export { a, b }'}</CodeBlockLine>
      </CodeBlockContent>
    </CodeBlock>
  ),
}

const longLine =
  'const veryLongVariableName = someFunction(argumentNumberOne, argumentNumberTwo, argumentNumberThree, argumentNumberFour, argumentNumberFive)\n'

export const LongContentScroll: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockContent>{longLine.repeat(4)}</CodeBlockContent>
    </CodeBlock>
  ),
}

export const LongContentWrapped: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockContent wrap>{longLine.repeat(4)}</CodeBlockContent>
    </CodeBlock>
  ),
}
