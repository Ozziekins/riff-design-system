// src/components/Typography/Heading/Heading.tsx

import React from 'react';
import { Text } from '../../primitives/Text/Text';
import { typography, colors } from '../../../tokens';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  as?: React.ElementType;
  level?: HeadingLevel;
  children: React.ReactNode;
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
    marginBottom: '24px',
  },
  2: {
    fontSize: typography.sizes.heading,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: '20px',
  },
  3: {
    fontSize: typography.sizes.subheading,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: '16px',
  },
  4: {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.normal,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: '12px',
  },
  5: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.relaxed,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: '8px',
  },
  6: {
    fontSize: typography.sizes.caption,
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.relaxed,
    fontFamily: typography.fonts.base,
    color: colors.text,
    marginBottom: '4px',
  },
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  level = 1,
  children,
}) => {
  const tag = as ?? (`h${level}` as React.ElementType);
  const style = styleMap[level];

  return (
    <Text
      as={tag}
      style={{
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        fontFamily: style.fontFamily,
        color: style.color,
        marginBottom: style.marginBottom,
      }}
    >
      {children}
    </Text>
  );
};
