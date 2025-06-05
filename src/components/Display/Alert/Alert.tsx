import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';
import { radii } from '../../../tokens/radii';
import { borderWidths } from '../../../tokens/borders';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledAlert = styled(Box)<{ variant: AlertVariant }>`
  background-color: ${({ variant }) => colors.alert[variant].background};
  border: ${borderWidths.thin} solid ${({ variant }) => colors.alert[variant].border};
  border-radius: ${radii.md};
  padding: ${spacing[4]} ${spacing[5]};
  margin: ${spacing[4]} 0;
`;

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  return (
    <StyledAlert
      variant={variant}
      role={role ?? (variant === 'error' ? 'alert' : 'status')}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <Text as="div" fontSize="body" style={{ color: colors.alert[variant].text }}>
        {children}
      </Text>
    </StyledAlert>
  );
};
