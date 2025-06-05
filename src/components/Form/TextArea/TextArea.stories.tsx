import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import { useState } from 'react';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter your message...',
    tone: 'default',
    disabled: false,
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `TextArea` component displays a multi-line text field with a single bottom border line. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — consistent with the Riff DS `TextInput` and `Select`. 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

// Shared Template → controlled textarea
const Template = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: Template,
};

export const WithError: Story = {
  args: {
    tone: 'error',
    placeholder: 'Please enter your message.',
  },
  render: Template,
};

export const WithSuccess: Story = {
  args: {
    tone: 'success',
    placeholder: 'Great message! 🎸',
  },
  render: Template,
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
  render: Template,
};
