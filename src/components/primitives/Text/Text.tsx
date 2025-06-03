// src/components/primitives/Text/Text.tsx

import React from 'react';
import type { TextProps } from './Text.types';
import { typography, colors } from '../../../tokens';
import styled from '@emotion/styled';

const fontSizes = {
  body: '16px',
  heading: '24px',
  caption: '12px',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const lineHeights = {
  normal: 1.5,
  relaxed: 1.75,
  tight: 1.2,
};

const StyledText = styled('span')<Pick<TextProps, 'fontSize' | 'fontWeight' | 'color' | 'marginBottom' | 'lineHeight'>>`
  font-family: ${typography.fonts.base};
  font-size: ${({ fontSize }) => fontSizes[fontSize || 'body']};
  font-weight: ${({ fontWeight }) => fontWeights[fontWeight || 'regular']};
  color: ${({ color }) => colors[color as keyof typeof colors] ?? color};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  line-height: ${({ lineHeight }) => lineHeights[lineHeight || 'normal']};
`;

export const Text: React.FC<TextProps> = ({
  as = 'span',
  fontSize = 'body',
  fontWeight = 'regular',
  color = 'text',
  marginBottom = '0',
  lineHeight = 'normal',
  children,
  ...rest
}) => {
  return (
    <StyledText
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      marginBottom={marginBottom}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
