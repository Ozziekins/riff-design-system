// src/components/Display/Card/Card.stories.tsx

import React from 'react';
import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
  title: 'Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
    },
    padding: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    elevation: 'md',
    padding: '16px',
    borderRadius: '8px',
    children: 'This is a Card!',
  },
};
