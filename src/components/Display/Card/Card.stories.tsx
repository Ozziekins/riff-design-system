import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../../Form/Button/Button';
import { Text } from '../../primitives/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    elevation: 'md',
    padding: 4,
    borderRadius: 'md',
    title: 'Today’s Practice Plan 🎸',
    children: (
      <Text>
        Start with your warm-up exercises, then move on to the new riffs in your playlist!
      </Text>
    ),
    actions: <Button>Start Session</Button>,
  },
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    padding: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    actions: {
      control: false, 
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Card` component provides a flexible container with an optional title and actions. Use it to highlight key content — like practice plans, song recommendations, or lesson previews! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};

export const WithTitleOnly: Story = {
  args: {
    title: 'Welcome Back, Player!',
    children: (
      <Text>
        Ready to continue your guitar journey today? Pick a lesson and start jamming! 🎸
      </Text>
    ),
    actions: undefined,
  },
};

export const WithActionsOnly: Story = {
  args: {
    title: undefined,
    children: (
      <Text>
        New riffs have been added to your playlist — check them out now! 🎵
      </Text>
    ),
    actions: <Button>View Playlist</Button>,
  },
};

export const BodyOnly: Story = {
  args: {
    title: undefined,
    children: (
      <Text>
        🎸 Fender Play Tip: Consistency beats speed! Practice daily for 15-20 minutes.
      </Text>
    ),
    actions: undefined,
  },
};

export const WithCustomActions: Story = {
  args: {
    title: 'Upcoming Lessons',
    children: (
      <Text>
        • Barre Chords<br />
        • Lead Techniques<br />
        • Solo Practice
      </Text>
    ),
    actions: (
      <>
        <Button variant="secondary">Skip</Button>
        <Button>Start Now</Button>
      </>
    ),
  },
};
