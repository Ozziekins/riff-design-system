// src/components/primitives/Box/Box.tsx

import React from 'react';
import styled from '@emotion/styled';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  backgroundColor?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
}

const StyledBox = styled('div')<Pick<BoxProps, 'backgroundColor' | 'borderWidth' | 'borderColor' | 'borderRadius' | 'padding' | 'margin'>>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
  border-width: ${({ borderWidth }) => borderWidth ?? '0'};
  border-color: ${({ borderColor }) => borderColor ?? 'transparent'};
  border-style: ${({ borderWidth }) => (borderWidth ? 'solid' : 'none')};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
  padding: ${({ padding }) => padding ?? '0'};
  margin: ${({ margin }) => margin ?? '0'};
`;

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  backgroundColor,
  borderWidth,
  borderColor,
  borderRadius,
  padding,
  margin,
  children,
  ...rest
}) => {
  return (
    <StyledBox
      as={as}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};
