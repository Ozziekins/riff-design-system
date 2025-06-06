import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';

type ListType = 'unordered' | 'ordered';

export interface ListProps {
  type?: ListType;
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledList = styled(Text)<{ as: 'ul' | 'ol' }>`
  font-size: ${typography.sizes.body};
  font-weight: ${typography.weights.regular};
  line-height: ${typography.lineHeights.normal};
  // font-family: ${typography.fonts.base};
  color: ${colors.text};
  margin-bottom: ${typography.spacing['400']};
  padding-left: ${spacing[5]};
`;

export const List: React.FC<ListProps> = ({
  type = 'unordered',
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  const tag = type === 'ordered' ? 'ol' : 'ul';

  return (
    <StyledList
      as={tag}
      role={role ?? 'list'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </StyledList>
  );
};
