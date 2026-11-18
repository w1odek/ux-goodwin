import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from './questionnaire'

const meta = {
  title: 'UI/Questionnaire',
  component: Questionnaire,
  tags: ['autodocs'],
  argTypes: {
    shortcuts: { control: 'select', options: [undefined, 'letters', 'numbers'] },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { name: 'goal', required: true, choices: [{ value: 'learn' }, { value: 'build' }, { value: 'explore' }] },
  { name: 'tools', choices: [{ value: 'editor' }, { value: 'terminal' }, { value: 'browser' }] },
  { name: 'feedback' },
] as const

export const Default: Story = {
  args: { items, defaultItem: 'goal' },
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireProgress />
      <QuestionnaireItem name="goal" required>
        <QuestionnaireTitle>What is your main goal?</QuestionnaireTitle>
        <QuestionnaireDescription>Choose the option that fits best.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="learn">
            Learn something new
            <QuestionnaireChoiceDescription>Tutorials and guided examples.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="build">
            Build a project
            <QuestionnaireChoiceDescription>Start from a template.</QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="explore">Just exploring</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Please choose an option.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="tools" multiple>
        <QuestionnaireTitle>Which tools do you use?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="editor">Editor</QuestionnaireChoice>
          <QuestionnaireChoice value="terminal">Terminal</QuestionnaireChoice>
          <QuestionnaireChoice value="browser">Browser</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="feedback">
        <QuestionnaireTitle>Any other feedback?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Type your answer" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  ),
}

export const SingleChoice: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="plan">
        <QuestionnaireTitle>Pick a plan</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="free">Free</QuestionnaireChoice>
          <QuestionnaireChoice value="pro" defaultChecked>
            Pro (preselected)
          </QuestionnaireChoice>
          <QuestionnaireChoice value="team">Team</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  ),
}

export const MultipleChoice: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="topics" multiple>
        <QuestionnaireTitle>Select all topics you care about</QuestionnaireTitle>
        <QuestionnaireDescription>You can select more than one.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="design" defaultChecked>
            Design
          </QuestionnaireChoice>
          <QuestionnaireChoice value="engineering" defaultChecked>
            Engineering
          </QuestionnaireChoice>
          <QuestionnaireChoice value="product">Product</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  ),
}

export const LetterShortcuts: Story = {
  args: { shortcuts: 'letters' },
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="color">
        <QuestionnaireTitle>Favorite color?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="red">Red</QuestionnaireChoice>
          <QuestionnaireChoice value="green">Green</QuestionnaireChoice>
          <QuestionnaireChoice value="blue">Blue</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}

export const NumberShortcuts: Story = {
  args: { shortcuts: 'numbers' },
  render: LetterShortcuts.render,
}

export const TextInput: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>What is your email?</QuestionnaireTitle>
        <QuestionnaireDescription>We will only use it to send your results.</QuestionnaireDescription>
        <QuestionnaireInput type="email" placeholder="you@example.com" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="size" invalid required>
        <QuestionnaireTitle>Choose a size</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="s">Small</QuestionnaireChoice>
          <QuestionnaireChoice value="m">Medium</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>This question is required.</QuestionnaireError>
      </QuestionnaireItem>
      <QuestionnaireItem name="name" invalid required>
        <QuestionnaireTitle>Your name</QuestionnaireTitle>
        <QuestionnaireInput aria-invalid placeholder="Name" />
        <QuestionnaireError>Please enter your name.</QuestionnaireError>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="locked" disabled>
        <QuestionnaireTitle>Disabled question</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="a">Option A</QuestionnaireChoice>
          <QuestionnaireChoice value="b" disabled>
            Option B (disabled)
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireInput disabled placeholder="Disabled input" />
      </QuestionnaireItem>
    </Questionnaire>
  ),
}

export const ActionButtonVariants: Story = {
  render: (args) => (
    <Questionnaire {...args} onSubmit={(e) => e.preventDefault()}>
      <QuestionnaireItem name="x">
        <QuestionnaireTitle>Navigation button variants</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Answer" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious variant="ghost" size="sm">
          Back
        </QuestionnairePrevious>
        <QuestionnaireSkip variant="ghost" size="sm">
          Later
        </QuestionnaireSkip>
        <QuestionnaireNext variant="secondary" size="sm">
          Continue
        </QuestionnaireNext>
      </QuestionnaireActions>
    </Questionnaire>
  ),
}
