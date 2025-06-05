import React from 'react';
import type { TextProps } from './Text.types';
import { typography, colors, spacing } from '../../../tokens';
import styled from '@emotion/styled';

const StyledText = styled('span')<TextProps>`
  font-family: ${typography.fonts.base};
  font-size: ${({ fontSize = 'body' }) => typography.sizes[fontSize]};
  font-weight: ${({ fontWeight = 'regular' }) => typography.weights[fontWeight]};
  line-height: ${({ lineHeight = 'normal' }) => typography.lineHeights[lineHeight]};
  color: ${({ color = 'color-neutral-black' }) => colors[color as keyof typeof colors] ?? color};
  margin-bottom: ${({ marginBottom = '0' }) => spacing[marginBottom as keyof typeof spacing] ?? marginBottom};
`;

export const Text: React.FC<TextProps> = ({
  as = 'span',
  fontSize = 'body',
  fontWeight = 'regular',
  lineHeight = 'normal',
  color = 'color-neutral-black',
  marginBottom = 0,
  children,
  ...rest
}) => {
  return (
    <StyledText
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      marginBottom={marginBottom}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
