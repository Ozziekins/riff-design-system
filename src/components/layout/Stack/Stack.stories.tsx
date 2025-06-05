import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box } from '../../primitives/Box/Box';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  args: {
    direction: 'vertical',
    gap: 4, // spacing[4]
  },
  parameters: {
    docs: {
      description: {
        component: 'The `Stack` component arranges items in a vertical or horizontal stack with consistent spacing. It’s ideal for flowing content layouts and spacing blocks naturally. ✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Stack {...args} role="group" aria-label="Example stack group">
      <Box backgroundColor="color-primary-crimson-red" padding={4} borderRadius="md">
        <span style={{ color: colors.primaryText }}>Item 1</span>
      </Box>
      <Box backgroundColor="black" padding={4} borderRadius="md">
        <span style={{ color: colors.secondaryText }}>Item 2</span>
      </Box>
      <Box backgroundColor="color-neutral-1" padding={4} borderRadius="md">
        <span style={{ color: colors.text }}>Item 3</span>
      </Box>
    </Stack>
  ),
};
