import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      { id: 'overview', label: 'Overview', content: 'Start your practice session and review the basics. 🎸' },
      { id: 'songs', label: 'Songs', content: 'Browse your favorite songs and learn new riffs! 🎵' },
      { id: 'techniques', label: 'Techniques', content: 'Improve your playing with targeted exercises. ✨' },
    ],
    defaultActiveId: 'overview',
    gap: 2,
    marginBottom: 4,
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    marginBottom: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Tabs` component organizes content into tabbed sections — perfect for navigating through lessons, song lists, or practice modes in your app. 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};
