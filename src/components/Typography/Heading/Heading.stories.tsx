import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { typography } from '../../../tokens/typography';
import { colors } from '../../../tokens/colors';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    level: 1,
    children: 'Try the next riff',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Heading` component provides semantic, accessible headings for your UI. Levels map to HTML tags `h1`–`h6` and apply consistent typography tokens from the Riff design system. Perfect for giving your pages a musical flow. 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {},
};

export const AllLevels: Story = {
  render: () => (
    <div>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <Heading key={level} level={level as any} aria-label={`Heading level ${level}`}>
          {getFenderCopy(level)}
        </Heading>
      ))}
    </div>
  ),
};

const getFenderCopy = (level: number) => {
  switch (level) {
    case 1:
      return 'Learn a new chord';
    case 2:
      return 'Learn a new chord';
    case 3:
      return 'Learn a new chord';
    case 4:
      return 'Learn a new chord';
    case 5:
      return 'Learn a new chord';
    case 6:
      return 'Learn a new chord';
    default:
      return 'Learn a new chord';
  }
};
