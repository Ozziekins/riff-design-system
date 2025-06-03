// src/components/Typography/List/List.stories.tsx

import React from 'react';
import { List } from './List';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof List> = {
  title: 'Typography/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['unordered', 'ordered'] },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Example: Story = {
  args: {
    type: 'unordered',
    children: (
      <>
        <li>Learn basic chords</li>
        <li>Practice strumming</li>
        <li>Play your first song</li>
      </>
    ),
  },
};
