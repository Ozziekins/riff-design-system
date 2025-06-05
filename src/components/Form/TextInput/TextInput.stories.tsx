import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    label: 'First Name',
    placeholder: 'Enter your first name',
    helperText: '',
    tone: 'default',
    disabled: false,
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
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
          'The `TextInput` component displays a single-line text field with an optional label and helper text. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — perfect for modern forms! 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

// Shared Template → controlled input
const Template = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
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
    helperText: 'Please enter a valid name.',
  },
  render: Template,
};

export const WithSuccess: Story = {
  args: {
    tone: 'success',
    helperText: 'Looks good! 🎸',
  },
  render: Template,
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
  render: Template,
};
