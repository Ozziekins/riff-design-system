// src/components/primitives/Text/Text.stories.tsx
import React from 'react';
import { Text } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text' },
    fontSize: { control: 'radio', options: ['body', 'heading', 'caption'] },
    fontWeight: { control: 'radio', options: ['regular', 'medium', 'bold'] },
    color: { control: 'radio', options: ['primary', 'secondary', 'text'] },
    marginBottom: { control: 'text' },
    lineHeight: { control: 'radio', options: ['normal', 'relaxed', 'tight'] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Example: Story = {
  args: {
    as: 'p',
    fontSize: 'body',
    fontWeight: 'regular',
    color: 'text',
    marginBottom: '16px',
    lineHeight: 'normal',
    children: 'This is an example paragraph using the Riff Text primitive.',
  },
};
