import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';
import { radii } from '../../../tokens/radii';

export type BadgeTone = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const StyledBadge = styled(Box)<{ tone: BadgeTone }>`
  display: inline-block;
  background-color: ${({ tone }) => colors.badge[tone].background};
  border-radius: ${radii.md};
  padding: ${spacing[0]} ${spacing[1]};
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'primary',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
}) => {
  return (
    <StyledBadge
      as="span"
      tone={tone}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
    >
      <Text as="span" fontSize="caption" fontWeight="regular" style={{ color: colors.badge[tone].text }}>
        {children}
      </Text>
    </StyledBadge>
  );
};
