// src/components/layout/Flex/Flex.tsx

import React from 'react';
import styled from '@emotion/styled';
import type { FlexProps } from './Flex.types';
import { spacing } from '../../../tokens/spacing';

const StyledFlex = styled('div')<Pick<FlexProps, 'justify' | 'align' | 'direction' | 'gap'>>`
  display: flex;
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'stretch'};
  flex-direction: ${({ direction }) => direction ?? 'row'};
  gap: ${({ gap }) => spacing[gap ?? 0]};
`;

export const Flex: React.FC<FlexProps> = ({
  justify = 'flex-start',
  align = 'stretch',
  direction = 'row',
  gap = 4, // spacing[4] → 16px
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...rest
}) => {
  return (
    <StyledFlex
      justify={justify}
      align={align}
      direction={direction}
      gap={gap}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};
