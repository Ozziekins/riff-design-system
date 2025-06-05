import React from 'react';
import styled from '@emotion/styled';
import type { StackProps } from './Stack.types';
import { spacing } from '../../../tokens/spacing';

const StyledStack = styled('div')<Pick<StackProps, 'direction' | 'gap'>>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: ${({ gap }) => spacing[gap ?? 0]};
`;

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  gap = 4, // spacing[4]
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...rest
}) => {
  return (
    <StyledStack
      direction={direction}
      gap={gap}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...rest}
    >
      {children}
    </StyledStack>
  );
};
