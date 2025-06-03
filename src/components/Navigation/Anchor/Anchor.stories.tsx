// src/components/Navigation/Anchor/Anchor.stories.tsx

import { Anchor } from './Anchor'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Anchor> = {
  title: 'Navigation/Anchor',
  component: Anchor,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Anchor>

export const Example: Story = {
  args: {
    href: 'https://www.fender.com/play',
    children: 'Visit Fender Play',
  },
}
