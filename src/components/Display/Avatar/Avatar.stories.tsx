// src/components/Display/Avatar/Avatar.stories.tsx

import React from 'react';
import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    src: { control: 'text' },
    initials: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Example: Story = {
  args: {
    size: '60px',
    initials: 'AB',
  },
};
