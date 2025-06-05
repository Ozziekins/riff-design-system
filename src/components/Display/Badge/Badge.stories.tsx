import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    tone: 'primary',
    children: 'New',
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Badge` component displays a small label for status, counts, or new content. Perfect for highlighting new lessons, features, or updates in your app! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((tone) => (
        <Badge key={tone} tone={tone as any}>
          {tone.toUpperCase()}
        </Badge>
      ))}
    </div>
  ),
};
