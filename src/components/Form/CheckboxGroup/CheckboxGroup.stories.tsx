import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Form/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    name: 'genres',
    options: [
      { value: 'rock', label: 'Rock' },
      { value: 'jazz', label: 'Jazz' },
      { value: 'blues', label: 'Blues' },
      { value: 'country', label: 'Country', disabled: true },
    ],
    selectedValues: ['rock'],
    gap: 2,
    ariaLabel: 'Select genres',
    ariaDescribedBy: undefined,
    onChange: undefined, // will be handled in render
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    selectedValues: {
      control: { type: 'check' },
      options: ['rock', 'jazz', 'blues', 'country'],
    },
    name: {
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
          'The `CheckboxGroup` component allows users to select one or more options from a list. It supports spacing (`gap`), disabled options, and ARIA accessibility — perfect for flexible form controls! 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValues);
    return (
      <CheckboxGroup
        {...args}
        selectedValues={selected}
        onChange={(values) => setSelected(values)}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValues);
    return (
      <CheckboxGroup
        {...args}
        options={[
          { value: 'rock', label: 'Rock' },
          { value: 'jazz', label: 'Jazz', disabled: true },
          { value: 'blues', label: 'Blues' },
          { value: 'country', label: 'Country' },
        ]}
        selectedValues={selected}
        onChange={(values) => setSelected(values)}
      />
    );
  },
};

export const CustomGap: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValues);
    return (
      <CheckboxGroup
        {...args}
        gap={4}
        selectedValues={selected}
        onChange={(values) => setSelected(values)}
      />
    );
  },
};
