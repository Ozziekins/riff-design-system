import type { HTMLAttributes } from 'react';
import { colors, spacing, radii, shadows, borderWidths, sizes } from '../../../tokens';

type BoxDOMProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;

export interface BoxProps extends BoxDOMProps {
  as?: React.ElementType;
  width?: keyof typeof sizes;
  height?: keyof typeof sizes;
  backgroundColor?: keyof typeof colors;
  borderRadius?: keyof typeof radii;
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  boxShadow?: keyof typeof shadows;
  borderWidth?: keyof typeof borderWidths;
  borderColor?: keyof typeof colors;
}
