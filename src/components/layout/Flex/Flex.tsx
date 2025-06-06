// src/components/layout/Flex/Flex.tsx

import React from 'react';
import styled from '@emotion/styled';
import type { FlexProps } from './Flex.types';
import { spacing, sizes } from '../../../tokens';

const StyledFlex = styled('div')<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'stretch'};
  flex-direction: ${({ direction }) => direction ?? 'row'};
  gap: ${({ gap = 0 }) => spacing[gap]};
  flex-grow: ${({ grow = 0 }) => grow};
  flex-shrink: ${({ shrink = 1 }) => shrink};
  flex-basis: ${({ basis }) =>
    basis ? sizes[basis as keyof typeof sizes] : 'auto'};
  margin: ${({ margin }) => (margin !== undefined ? spacing[margin] : '0')};
  margin-top: ${({ marginTop }) => (marginTop !== undefined ? spacing[marginTop] : undefined)};
  margin-bottom: ${({ marginBottom }) => (marginBottom !== undefined ? spacing[marginBottom] : undefined)};
  margin-left: ${({ marginLeft }) => (marginLeft !== undefined ? spacing[marginLeft] : undefined)};
  margin-right: ${({ marginRight }) => (marginRight !== undefined ? spacing[marginRight] : undefined)};
  padding: ${({ padding }) => (padding ? spacing[padding] : undefined)};
  padding-top: ${({ paddingTop }) => (paddingTop ? spacing[paddingTop] : undefined)};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? spacing[paddingBottom] : undefined)};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? spacing[paddingLeft] : undefined)};
  padding-right: ${({ paddingRight }) => (paddingRight ? spacing[paddingRight] : undefined)};
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
