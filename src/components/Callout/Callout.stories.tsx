// src/components/Callout/Callout.stories.tsx

import React from 'react';
import { Callout } from './Callout';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Example: Story = {
  args: {
    variant: 'info',
    title: 'Heads up!',
    children: 'This is an informational callout.',
  },
};
