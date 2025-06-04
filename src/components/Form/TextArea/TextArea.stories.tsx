import { TextArea } from './TextArea'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Example: Story = {
  args: {
    placeholder: 'Enter multiple lines...',
    rows: 4,
    hasError: false,
  },
}
