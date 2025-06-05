import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Button } from '../../Form/Button/Button';
import { spacing } from '../../../tokens/spacing';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  gap?: keyof typeof spacing;
}

const StyledPagination = styled(Box)<{ gap: keyof typeof spacing }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => spacing[gap]};
`;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  gap = 2, // spacing[2] → 8px
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <StyledPagination
      as="nav"
      role="navigation"
      aria-label="Pagination"
      gap={gap}
    >
      <Button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={page === currentPage ? 'primary' : 'secondary'}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </StyledPagination>
  );
};
