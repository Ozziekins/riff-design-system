import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    items: [
      { id: 'one', title: 'What is Fender Play?', content: 'Fender Play is an online platform to learn guitar, bass, and ukulele.' },
      { id: 'two', title: 'How to start?', content: 'Choose your instrument and follow the lessons step by step.' },
      { id: 'three', title: 'Membership?', content: 'Membership gives you access to all lessons and practice tools.' },
    ],
    defaultOpenId: 'one',
    gap: 3,
    ariaLabel: 'Frequently Asked Questions',
    ariaDescribedBy: undefined,
  },
  argTypes: {
    items: {
      control: 'object',
    },
    gap: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    defaultOpenId: {
      control: 'text',
    },
    ariaLabel: {
      control: 'text',
    },
    ariaDescribedBy: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Accordion` component displays collapsible content sections. Only one section is open at a time. Accessible and keyboard-friendly — ready for Fender Play! 🎸',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: { ...meta.args },
};

export const NoDefaultOpen: Story = {
  args: {
    ...meta.args,
    defaultOpenId: '',
  },
};

export const CustomGap: Story = {
  args: {
    ...meta.args,
    gap: 4,
  },
};
