// src/components/Callout/Callout.tsx

import React from 'react';
import { Box } from '../primitives/Box/Box';
import { Text } from '../primitives/Text/Text';

type CalloutVariant = 'info' | 'success' | 'warning' | 'error';

export interface CalloutProps {
  variant?: CalloutVariant;
  title: string;
  children: React.ReactNode;
}

const variantStyles: Record<CalloutVariant, { background: string; border: string; text: string }> = {
  info: { background: '#E8F4FD', border: '#3498DB', text: '#1D3557' },
  success: { background: '#EAF7F0', border: '#2ECC71', text: '#1B4332' },
  warning: { background: '#FFF4E5', border: '#F39C12', text: '#7D5102' },
  error: { background: '#FDEDEC', border: '#E74C3C', text: '#641E16' },
};

export const Callout: React.FC<CalloutProps> = ({
  variant = 'info',
  title,
  children,
}) => {
  const styles = variantStyles[variant];

  return (
    <Box
      backgroundColor={styles.background}
      borderWidth="1px"
      borderColor={styles.border}
      borderRadius="8px"
      padding="16px"
      margin="16px 0"
    >
      <Text as="div" fontSize="heading" fontWeight="bold" color="text" marginBottom="8px">
        {title}
      </Text>
      <Text as="div" fontSize="body" color="text">
        {children}
      </Text>
    </Box>
  );
};
