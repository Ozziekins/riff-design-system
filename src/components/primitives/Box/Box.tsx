import React from 'react';
import type { BoxProps } from './Box.types';
import { colors, spacing, radii, shadows, sizes } from '../../../tokens';
import styled from '@emotion/styled';

const StyledBox = styled('div')<BoxProps>`
  background-color: ${({ backgroundColor = 'transparent' }) =>
    colors[backgroundColor as keyof typeof colors] ?? backgroundColor};
  border-radius: ${({ borderRadius = 'none' }) =>
    radii[borderRadius as keyof typeof radii] ?? borderRadius};
  padding: ${({ padding = '0' }) =>
    spacing[padding as keyof typeof spacing] ?? padding};
  margin: ${({ margin = '0' }) =>
    spacing[margin as keyof typeof spacing] ?? margin};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? shadows[boxShadow as keyof typeof shadows] ?? boxShadow : 'none'};
  width: ${({ width }) => (width ? sizes[width as keyof typeof sizes] : 'auto')};
  height: ${({ height }) => (height ? sizes[height as keyof typeof sizes] : 'auto')};
`;

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  backgroundColor = 'transparent',
  borderRadius = 'none',
  padding = 0,
  margin = 0,
  boxShadow,
  children,
  ...rest 
}) => {
  return (
    <StyledBox
      as={as}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      boxShadow={boxShadow}
      {...rest} 
    >
      {children}
    </StyledBox>
  );
};
