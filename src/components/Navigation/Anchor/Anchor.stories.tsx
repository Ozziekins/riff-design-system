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
      options: ['internal', 'internalRed', 'external', 'externalRed'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Anchor` component provides a styled, accessible link for navigation. Use `external`/`externalRed` to open in a new tab with an external link icon.',
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

export const InternalRed: Story = {
  args: {
    href: '#',
    variant: 'internalRed',
    children: 'Internal Red Link',
  },
};

export const ExternalRed: Story = {
  args: {
    href: 'https://www.fender.com/play',
    variant: 'externalRed',
    children: 'External Red Link',
  },
};
