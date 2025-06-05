// src/components/layout/Flex/Flex.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from '../../primitives/Box/Box';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: {
    justify: 'flex-start',
    align: 'stretch',
    direction: 'row',
    gap: 4, // spacing[4] = 16px
  },
  parameters: {
    docs: {
      description: {
        component: 'The `Flex` component arranges elements using CSS Flexbox. Use it for layout primitives with full control of direction, alignment, spacing, and flow. ✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Flex {...args} role="group" aria-label="Example flex group">
      <Box backgroundColor="primary" padding={4} borderRadius="md">
        <span style={{ color: colors.primaryText }}>Box 1</span>
      </Box>
      <Box backgroundColor="secondary" padding={4} borderRadius="md">
        <span style={{ color: colors.secondaryText }}>Box 2</span>
      </Box>
      <Box backgroundColor="accent" padding={4} borderRadius="md">
        <span style={{ color: colors.text }}>Box 3</span>
      </Box>
    </Flex>
  ),
};