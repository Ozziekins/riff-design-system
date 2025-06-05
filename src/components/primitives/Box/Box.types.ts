import type { HTMLAttributes } from 'react';
import { colors, spacing, radii, shadows, borderWidths } from '../../../tokens';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  backgroundColor?: keyof typeof colors;
  borderRadius?: keyof typeof radii;
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  boxShadow?: keyof typeof shadows;
  borderWidth?: keyof typeof borderWidths;
  borderColor?: keyof typeof colors;
}
