// src/components/Callout/Callout.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Callout, type CalloutProps } from './Callout';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { radii } from '../../tokens/radii';
import { borderWidths } from '../../tokens/borders';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Need a hand?',
    children: 'Here’s a quick tip to help you get the most out of Riff. You’re doing great!',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Well done!',
    children: 'You’ve completed this step. Keep going — your flow is looking sharp.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Heads up!',
    children: 'This setting could impact your user experience. Review it carefully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Something went wrong.',
    children: 'Please check your inputs and try again. If the issue persists, contact support.',
  },
};
