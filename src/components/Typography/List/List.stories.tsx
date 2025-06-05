import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Typography/List',
  component: List,
  tags: ['autodocs'],
  args: {
    type: 'unordered',
    children: (
      <>
        <li>Warm up your fingers</li>
        <li>Practice chord transitions</li>
        <li>Jam to your favorite track</li>
      </>
    ),
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['unordered', 'ordered'],
    },
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `List` component renders ordered (`ol`) or unordered (`ul`) lists with consistent typography and spacing. Ideal for lesson steps, practice tips, and song breakdowns. 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {},
};

export const OrderedList: Story = {
  args: {
    type: 'ordered',
    children: (
      <>
        <li>Pick a song</li>
        <li>Learn the chords</li>
        <li>Play along with the track</li>
      </>
    ),
  },
};
