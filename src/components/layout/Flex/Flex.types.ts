// src/components/layout/Flex/Flex.types.ts

import type { spacing, sizes } from '../../../tokens';

export interface FlexProps {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  direction?: 'row' | 'column';
  gap?: keyof typeof spacing;
  grow?: number;
  shrink?: number;
  basis?: keyof typeof sizes | 'auto';
  margin?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  marginLeft?: keyof typeof spacing;
  marginRight?: keyof typeof spacing;
  padding?: keyof typeof spacing;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  paddingLeft?: keyof typeof spacing;
  paddingRight?: keyof typeof spacing;
  role?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
}
