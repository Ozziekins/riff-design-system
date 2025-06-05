import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'md',
    src: undefined,
    alt: 'Fender Player',
    initials: 'FP',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    initials: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Avatar` component displays a user’s photo or initials. Use it in profiles, comments, and identity elements throughout your app. 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const WithPhoto: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=32', // demo avatar photo
    alt: 'Guitarist Avatar',
    initials: undefined,
  },
};

export const WithInitials: Story = {
  args: {
    src: undefined,
    initials: 'MJ',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="sm" initials="S" />
      <Avatar size="md" initials="M" />
      <Avatar size="lg" initials="L" />
      <Avatar size="xl" initials="XL" />
    </div>
  ),
};
