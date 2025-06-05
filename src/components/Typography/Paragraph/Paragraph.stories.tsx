import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  args: {
    children:
      'Before you dive in, make sure your guitar is tuned up and ready to play. Start with some simple warm-up exercises to get your fingers moving. Then, jump into your next lesson and keep the groove going! 🎸',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Paragraph` component is used for body text across the Riff design system. It applies consistent spacing, typography, and readability — perfect for lesson content, song intros, and learning tips. 🎶',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {},
};
