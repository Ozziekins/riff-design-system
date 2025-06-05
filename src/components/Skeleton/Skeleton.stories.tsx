import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    width: '100%',
    height: '16px',
    variant: 'rect',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['rect', 'circle', 'text'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Skeleton` component provides a lightweight loading placeholder while content is being fetched. Use it to create smoother transitions in your app — keep players engaged while the next riff loads! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '48px',
  },
};

export const TextSkeleton: Story = {
  args: {
    variant: 'text',
    width: '80%',
  },
};
