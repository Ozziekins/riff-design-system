import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    name: 'instrument',
    options: [
      { value: 'guitar', label: 'Guitar' },
      { value: 'bass', label: 'Bass' },
      { value: 'ukulele', label: 'Ukulele', disabled: true },
    ],
    selectedValue: 'guitar',
    gap: 2,
    tone: 'default',
    onChange: undefined, // will be handled in render
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    tone: {
      control: { type: 'select' },
      options: ['default', 'error'],
    },
    selectedValue: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `RadioGroup` component allows users to select a single option from a list. It supports spacing (`gap`), tone (`default` or `error`), and disabled options — perfect for building interactive forms in your app! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

import { useState } from 'react';

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);
    return (
      <RadioGroup
        {...args}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);
    return (
      <RadioGroup
        {...args}
        tone="error"
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);
    return (
      <RadioGroup
        {...args}
        options={[
          { value: 'guitar', label: 'Guitar' },
          { value: 'bass', label: 'Bass', disabled: true },
          { value: 'ukulele', label: 'Ukulele' },
        ]}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />
    );
  },
};

export const CustomGap: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);
    return (
      <RadioGroup
        {...args}
        gap={4}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />
    );
  },
};
