import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../primitives/Text/Text';
import { typography, colors } from '../../../tokens';

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
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    fontFamily: string;
    color: string;
    marginBottom: string;
  }
> = {
  1: {
    fontSize: typography.sizes.display,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.tight,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['600'],
  },
  2: {
    fontSize: typography.sizes.heading,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['500'],
  },
  3: {
    fontSize: typography.sizes.subheading,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['400'],
  },
  4: {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['300'],
  },
  5: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.relaxed,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['200'],
  },
  6: {
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.relaxed,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: typography.spacing['100'],
  },
};

// Styled component → this improves readability
const StyledHeading = styled(Text)<{ level: HeadingLevel }>`
  font-size: ${({ level }) => styleMap[level].fontSize};
  font-weight: ${({ level }) => styleMap[level].fontWeight};
  line-height: ${({ level }) => styleMap[level].lineHeight};
  font-family: ${({ level }) => styleMap[level].fontFamily};
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
      role={role ?? 'heading'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </StyledHeading>
  );
};
