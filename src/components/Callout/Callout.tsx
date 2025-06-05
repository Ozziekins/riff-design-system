// src/components/Callout/Callout.tsx

import React from 'react';
import { Box } from '../primitives/Box/Box';
import { Text } from '../primitives/Text/Text';
import type { CalloutProps, CalloutVariant } from './Callout.types';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';

// Tokenized variant styles
const variantStyles: Record<CalloutVariant, { background: keyof typeof colors; border: keyof typeof colors; text: keyof typeof colors }> = {
  info: {
    background: 'infoBackground',
    border: 'infoBorder',
    text: 'infoText',
  },
  success: {
    background: 'successBackground',
    border: 'successBorder',
    text: 'successText',
  },
  warning: {
    background: 'warningBackground',
    border: 'warningBorder',
    text: 'warningText',
  },
  error: {
    background: 'errorBackground',
    border: 'errorBorder',
    text: 'errorText',
  },
};

export const Callout: React.FC<CalloutProps> = ({
  variant = 'info',
  title,
  children,
}) => {
  const styles = variantStyles[variant];

  return (
    <Box
      as="section"
      role="region"
      aria-label={`${variant} callout`}
      backgroundColor={styles.background}
      borderWidth="thin"
      borderColor={styles.border}
      borderRadius="md"
      padding={5}
      margin={5}
    >
      <Text
        as="h3"
        fontSize="heading"
        fontWeight="bold"
        color={styles.text}
        marginBottom={3}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontSize="body"
        color={styles.text}
      >
        {children}
      </Text>
    </Box>
  );
};
