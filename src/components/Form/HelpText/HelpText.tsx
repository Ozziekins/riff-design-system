import React from 'react';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';

export interface HelpTextProps {
  id?: string;
  children: React.ReactNode;
  tone?: 'default' | 'error' | 'success';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const toneColors: Record<'default' | 'error' | 'success', string> = {
  default: colors.text,
  error: colors.errorText ?? colors.error,
  success: colors.successText ?? colors.success,
};

export const HelpText: React.FC<HelpTextProps> = ({
  id,
  children,
  tone = 'default',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
}) => {
  return (
    <Text
      as="p"
      id={id}
      fontSize="caption"
      style={{ color: toneColors[tone] }}
      marginBottom={0}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
    >
      {children}
    </Text>
  );
};
