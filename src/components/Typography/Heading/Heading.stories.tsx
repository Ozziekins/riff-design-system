// src/components/Typography/Heading/Heading.stories.tsx

import React from 'react';
import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: { control: false }, 
    level: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Example: Story = {
  render: () => (
    <>
      <Heading as="h1" level={1}>Try the next riff - h1</Heading>
      <Heading as="h2" level={2}>Try the next riff - h2</Heading>
      <Heading as="h3" level={3}>Try the next riff - h3</Heading>
      <Heading as="h4" level={4}>Try the next riff - h4</Heading>
      <Heading as="h5" level={5}>Try the next riff - h5</Heading>
      <Heading as="h6" level={6}>Try the next riff - h6</Heading>
    </>
  ),
};
