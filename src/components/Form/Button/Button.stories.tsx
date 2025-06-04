// src/components/Form/Button/Button.stories.tsx

import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Example: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Click me',
  },
}
