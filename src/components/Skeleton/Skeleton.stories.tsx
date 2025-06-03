// src/components/Skeleton/Skeleton.stories.tsx

import React from 'react';
import { Skeleton } from './Skeleton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    variant: { control: 'radio', options: ['rect', 'circle', 'text'] },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Example: Story = {
  args: {
    width: '100%',
    height: '16px',
    variant: 'rect',
  },
};
