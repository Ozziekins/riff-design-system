// src/components/Navigation/Pagination/Pagination.stories.tsx

import { Pagination } from './Pagination'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Example: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => {
      console.log('Page changed to:', page)
    },
  },
}
