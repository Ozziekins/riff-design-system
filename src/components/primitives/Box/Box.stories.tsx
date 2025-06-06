// src/components/primitives/Box/Box.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import {
  borderWidthOptions,
  colorOptions,
  radiusOptions,
  spacingOptions,
} from '../../../../.storybook/storybook-utils';

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    a11y: {},
  },
  argTypes: {
    as: { control: 'text' },
    backgroundColor: { control: 'select', options: colorOptions },
    borderWidth: { control: 'select', options: borderWidthOptions },
    borderColor: { control: 'select', options: colorOptions },
    borderRadius: { control: 'select', options: radiusOptions },
    padding: { control: 'select', options: spacingOptions },
    margin: { control: 'select', options: spacingOptions },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    as: 'div',
    backgroundColor: 'color-extended-crimson-red-4',
    borderWidth: 'thin',
    borderColor: 'border',
    borderRadius: 'md',
    padding: 4,
    margin: 4,
    width: 'size16',
    height: 'size9',
    children: 'Explore your favourite artists, genres, live lessons & more.',
  },
};
