// src/components/layout/Flex/Flex.types.ts

import type { spacing } from '../../../tokens/spacing';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  direction?: 'row' | 'column';
  gap?: keyof typeof spacing;
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}
