import type { spacing } from '../../../tokens/spacing';

export type StackDirection = 'vertical' | 'horizontal';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: keyof typeof spacing;
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}
