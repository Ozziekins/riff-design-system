import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'large',
    disabled: false,
    children: 'Play',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primaryBlack',
        'secondary',
        'secondaryBlack',
        'tertiary',
        'tertiaryBlack',
      ] satisfies ButtonVariant[],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Button` component supports Primary, Secondary, and Tertiary variants — in both red and black — with full design system tokens. It also supports sizes (small, large) and states (enabled, hover, pressed, disabled). 🎸✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryBlack: Story = {
  args: {
    variant: 'primaryBlack',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryBlack: Story = {
  args: {
    variant: 'secondaryBlack',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const TertiaryBlack: Story = {
  args: {
    variant: 'tertiaryBlack',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <>
      <Button variant="primary" size="small">Small</Button>{' '}
      <Button variant="primary" size="large">Large</Button>
    </>
  ),
};
