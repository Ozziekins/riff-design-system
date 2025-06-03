import { TextInput } from './TextInput'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Example: Story = {
  args: {
    placeholder: 'Enter text...',
    hasError: false,
  },
}
