import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'

import '../src/index.css'
import { TooltipProvider } from '../src/components/ui/tooltip'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      test: 'todo',
    },
  },
  decorators: [
    // Toggles the `.dark` class on <html>, matching shadcn's `@custom-variant dark`.
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
    (Story) => (
      <TooltipProvider>
        <div className="bg-background text-foreground rounded-lg p-6">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
}

export default preview
