import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalPages: 5,
    gap: 2,
    onPageChange: undefined, // This will be set in the story render function
  },
  argTypes: {
    currentPage: {
      control: 'number',
    },
    totalPages: {
      control: 'number',
    },
    gap: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Pagination` component provides navigation between pages of content. Perfect for browsing through song lists, practice sets, or your favorite riffs! 🎵✨',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  },
};
