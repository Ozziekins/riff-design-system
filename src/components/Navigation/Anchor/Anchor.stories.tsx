import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './Anchor';

const meta: Meta<typeof Anchor> = {
  title: 'Navigation/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  args: {
    href: '#',
    variant: 'internal',
    children: 'Learn your next riff',
  },
  argTypes: {
    href: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    variant: {
      control: { type: 'select' },
      options: ['internal', 'external'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Anchor` component provides a styled, accessible link for navigation. Use `variant="external"` to open in a new tab with an external link icon — ideal for calls to action or external resources. 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {},
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.fender.com/play',
    variant: 'external',
    children: 'Visit Fender Play',
  },
};
