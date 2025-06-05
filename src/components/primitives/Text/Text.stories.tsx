// src/components/primitives/Text/Text.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import {
  colorOptions,
  fontSizeOptions,
  fontWeightOptions,
  lineHeightOptions,
  spacingOptions,
} from '../../../../.storybook/storybook-utils';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    a11y: { element: '#root' },
  },
  argTypes: {
    as: { control: 'text' },
    fontSize: { control: 'select', options: fontSizeOptions },
    fontWeight: { control: 'select', options: fontWeightOptions },
    color: { control: 'select', options: colorOptions },
    marginBottom: { control: 'select', options: spacingOptions },
    lineHeight: { control: 'select', options: lineHeightOptions },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Build your skills playing the songs you love.',
    fontSize: 'body',
    fontWeight: 'regular',
    color: 'text',
    marginBottom: 0,
    lineHeight: 'normal',
  },
};

