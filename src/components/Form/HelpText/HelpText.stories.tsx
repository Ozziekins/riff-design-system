import type { Meta, StoryObj } from '@storybook/react';
import { HelpText } from './HelpText';

const meta: Meta<typeof HelpText> = {
  title: 'Form/HelpText',
  component: HelpText,
  tags: ['autodocs'],
  args: {
    tone: 'default',
    children: 'This field supports text input.',
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `HelpText` component displays context-sensitive messages for form fields. It supports different tones (`default`, `error`, `success`) and can be used with `aria-describedby` for accessibility. 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HelpText>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    tone: 'error',
    children: 'Please enter a valid email address.',
  },
};

export const Success: Story = {
  args: {
    tone: 'success',
    children: 'Looks good! 🎸',
  },
};

export const WithAria: Story = {
  args: {
    id: 'email-helptext',
    tone: 'default',
    children: 'Your email will be used for account recovery.',
    role: 'note',
    'aria-label': 'Email help text',
  },
};
