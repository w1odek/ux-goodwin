import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from './combobox'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro', 'Vite', 'Angular']

const groups = [
  { value: 'Frontend', items: ['React', 'Vue', 'Svelte', 'Solid'] },
  { value: 'Backend', items: ['Node.js', 'Deno', 'Bun'] },
]

const meta = {
  title: 'UI/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="min-h-80 w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

function Basic({
  defaultOpen,
  disabled,
  defaultValue,
  showClear,
  invalid,
  items = frameworks,
}: {
  defaultOpen?: boolean
  disabled?: boolean
  defaultValue?: string
  showClear?: boolean
  invalid?: boolean
  items?: string[]
}) {
  return (
    <Combobox items={items} defaultOpen={defaultOpen} disabled={disabled} defaultValue={defaultValue}>
      <ComboboxInput
        placeholder="Select a framework"
        showClear={showClear}
        aria-invalid={invalid || undefined}
      />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export const Default: Story = {
  render: () => <Basic />,
}

export const DefaultOpen: Story = {
  render: () => <Basic defaultOpen />,
}

export const WithSelectedValue: Story = {
  render: () => <Basic defaultValue="Astro" defaultOpen />,
}

export const WithClearButton: Story = {
  render: () => <Basic defaultValue="Remix" showClear />,
}

export const Disabled: Story = {
  render: () => <Basic disabled defaultValue="Vite" />,
}

export const Invalid: Story = {
  render: () => <Basic invalid />,
}

export const EmptyResults: Story = {
  render: () => <Basic items={[]} defaultOpen />,
}

export const Grouped: Story = {
  render: () => (
    <Combobox items={groups} defaultOpen>
      <ComboboxInput placeholder="Select a technology" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(group: (typeof groups)[number], index: number) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < groups.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const LongList: Story = {
  render: () => (
    <Basic defaultOpen items={Array.from({ length: 50 }, (_, i) => `Option ${i + 1}`)} />
  ),
}

function MultipleDemo({ defaultOpen }: { defaultOpen?: boolean }) {
  const anchor = useComboboxAnchor()
  return (
    <Combobox
      multiple
      items={frameworks}
      defaultValue={['Next.js', 'Astro']}
      defaultOpen={defaultOpen}
    >
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(values: string[]) => (
            <>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add framework" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export const MultipleChips: Story = {
  render: () => <MultipleDemo />,
}

export const MultipleChipsOpen: Story = {
  render: () => <MultipleDemo defaultOpen />,
}
