// src/components/Typography/Paragraph/Paragraph.stories.tsx

import React from 'react';
import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Example: Story = {
  args: {
    children: 'This is a paragraph. Learn guitar with Riff!',
  },
};
