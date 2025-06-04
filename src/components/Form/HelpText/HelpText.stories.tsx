// src/components/Form/HelpText/HelpText.stories.tsx

import { HelpText } from './HelpText'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof HelpText> = {
  title: 'Form/HelpText',
  component: HelpText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HelpText>

export const Example: Story = {
  args: {
    children: 'This is some helpful text.',
    tone: 'default',
  },
}
