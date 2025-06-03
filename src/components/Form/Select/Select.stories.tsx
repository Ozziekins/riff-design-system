// src/components/Form/Select/Select.stories.tsx

import { Select } from './Select'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Example: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option One' },
      { value: 'option2', label: 'Option Two' },
      { value: 'option3', label: 'Option Three' },
    ],
    hasError: false,
  },
}
