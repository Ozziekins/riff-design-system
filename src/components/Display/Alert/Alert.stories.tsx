import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Display/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    variant: 'info',
    children: 'New riffs have been added to your practice playlist! 🎸',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Alert` component displays important messages and feedback to users. Use different variants (`info`, `success`, `warning`, `error`) to communicate clearly — and keep your players grooving! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'You completed today’s practice session! ✨',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Your subscription is about to expire. Don’t miss out on new riffs!',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'There was an error loading your lessons. Please try again.',
  },
};
