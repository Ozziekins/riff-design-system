// src/components/primitives/Text/Text.types.ts
import React from 'react';
import { typography, colors, spacing } from '../../../tokens';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  fontSize?: keyof typeof typography.sizes;
  fontWeight?: keyof typeof typography.weights;
  lineHeight?: keyof typeof typography.lineHeights;
  color?: keyof typeof colors;
  marginBottom?: keyof typeof spacing;
}

