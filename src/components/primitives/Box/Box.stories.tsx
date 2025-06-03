// src/components/primitives/Box/Box.stories.tsx

import React from 'react';
import { Box } from './Box';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderWidth: { control: 'text' },
    borderColor: { control: 'color' },
    borderRadius: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Example: Story = {
  args: {
    as: 'div',
    backgroundColor: '#F4F4F4',
    borderWidth: '1px',
    borderColor: '#E0E0E0',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    children: 'This is a Box primitive!',
  },
};
