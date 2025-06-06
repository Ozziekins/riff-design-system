import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../primitives/Text/Text';
import { typography, colors, spacing } from '../../../tokens';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  as?: React.ElementType;
  level?: HeadingLevel;
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const styleMap: Record<
  HeadingLevel,
  {
    fontSize: keyof typeof typography.sizes;
    fontWeight: keyof typeof typography.weights;
    lineHeight: keyof typeof typography.lineHeights;
    fontFamily: keyof typeof typography.fonts;
    color: keyof typeof colors;
    marginBottom: keyof typeof spacing;
  }
> = {
  1: {
    fontSize: 'display',
    fontWeight: 'bold',
    lineHeight: 'tight',
    fontFamily: 'base',
    color: 'color-primary-crimson-red',
    marginBottom: 5,
  },
  2: {
    fontSize: 'heading',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontFamily: 'base',
    color: 'color-primary-crimson-red',
    marginBottom: 4,
  },
  3: {
    fontSize: 'subheading',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontFamily: 'base',
    color: 'color-primary-crimson-red',
    marginBottom: 4,
  },
  4: {
    fontSize: 'body',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontFamily: 'base',
    color: 'text',
    marginBottom: 3,
  },
  5: {
    fontSize: 'small',
    fontWeight: 'bold',
    lineHeight: 'relaxed',
    fontFamily: 'base',
    color: 'text',
    marginBottom: 2,
  },
  6: {
    fontSize: 'caption',
    fontWeight: 'bold',
    lineHeight: 'relaxed',
    fontFamily: 'base',
    color: 'text',
    marginBottom: 1,
  },
};

// Styled component → this improves readability
const StyledHeading = styled(Text)<{ level: HeadingLevel }>`
  font-size: ${({ level }) => styleMap[level].fontSize};
  font-weight: ${({ level }) => styleMap[level].fontWeight};
  line-height: ${({ level }) => styleMap[level].lineHeight};
  // font-family: ${({ level }) => styleMap[level].fontFamily};
  color: ${({ level }) => styleMap[level].color};
  margin-bottom: ${({ level }) => styleMap[level].marginBottom};
`;

export const Heading: React.FC<HeadingProps> = ({
  as,
  level = 1,
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  const tag = as ?? (`h${level}` as React.ElementType);

  return (
    <StyledHeading
      as={tag}
      level={level}
      fontWeight={styleMap[level].fontWeight}
      lineHeight={styleMap[level].lineHeight}
      fontSize={styleMap[level].fontSize}
      color={styleMap[level].color}
      marginBottom={styleMap[level].marginBottom}
      role={role ?? 'heading'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </StyledHeading>
  );
};
