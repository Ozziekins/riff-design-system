import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Lesson Level',
    placeholder: 'Select level',
    helperText: '',
    tone: 'default',
    disabled: false,
    options: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
    ],
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
          'The `Select` component displays a dropdown with an optional label and helper text. It supports tone (`default`, `error`, `success`), disabled state, full ARIA accessibility — perfectly consistent with the Riff DS `TextInput`! 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

// Shared Template → controlled Select
const Template = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <Select
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
    helperText: 'Please select a level.',
  },
  render: Template,
};

export const WithSuccess: Story = {
  args: {
    tone: 'success',
    helperText: 'Great choice! 🎸',
  },
  render: Template,
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled select',
  },
  render: Template,
};
