// src/components/Typography/Paragraph/Paragraph.tsx

import React from 'react';
import { Text } from '../../primitives/Text/Text';
import { typography, colors, spacing } from '../../../tokens';

export interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <Text
      as="p"
      style={{
        fontSize: typography.sizes.body,
        fontWeight: typography.weights.regular,
        lineHeight: typography.lineHeights.normal,
        fontFamily: typography.fonts.base,
        color: colors.text,
        marginBottom: spacing[4], // '16px'
      }}
    >
      {children}
    </Text>
  );
};
