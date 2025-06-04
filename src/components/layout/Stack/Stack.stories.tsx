// src/components/layout/Stack/Stack.stories.tsx

import React from 'react';
import { Stack } from './Stack';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
    gap: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Example: Story = {
  args: {
    direction: 'vertical',
    gap: '16px',
    children: (
      <>
        <div style={{ backgroundColor: '#FF6200', padding: '8px' }}>Item 1</div>
        <div style={{ backgroundColor: '#0061FF', padding: '8px' }}>Item 2</div>
        <div style={{ backgroundColor: '#00D1B2', padding: '8px' }}>Item 3</div>
      </>
    ),
  },
};
