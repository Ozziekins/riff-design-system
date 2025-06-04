// src/components/layout/Flex/Flex.stories.tsx

import React from 'react';
import { Flex } from './Flex';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    justify: { control: 'text' },
    align: { control: 'text' },
    direction: { control: 'radio', options: ['row', 'column'] },
    gap: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Example: Story = {
  args: {
    justify: 'space-between',
    align: 'center',
    direction: 'row',
    gap: '16px',
    children: (
      <>
        <div style={{ backgroundColor: '#FF6200', padding: '8px' }}>Left</div>
        <div style={{ backgroundColor: '#0061FF', padding: '8px' }}>Right</div>
      </>
    ),
  },
};
