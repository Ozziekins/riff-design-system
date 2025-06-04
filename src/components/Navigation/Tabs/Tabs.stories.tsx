// src/components/Navigation/Tabs/Tabs.stories.tsx

import { Tabs } from './Tabs'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Example: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab One', content: 'Content of Tab One' },
      { id: 'tab2', label: 'Tab Two', content: 'Content of Tab Two' },
      { id: 'tab3', label: 'Tab Three', content: 'Content of Tab Three' },
    ],
    defaultActiveId: 'tab1',
  },
}
