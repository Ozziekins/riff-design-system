// src/components/Typography/List/List.tsx

import React from 'react';
import { Text } from '../../primitives/Text/Text';
import { typography, colors, spacing } from '../../../tokens';

type ListType = 'unordered' | 'ordered';

export interface ListProps {
  type?: ListType;
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ type = 'unordered', children }) => {
  const tag = type === 'ordered' ? 'ol' : 'ul';

  return (
    <Text
      as={tag}
      style={{
        fontSize: typography.sizes.body,
        fontWeight: typography.weights.regular,
        lineHeight: typography.lineHeights.normal,
        fontFamily: typography.fonts.base,
        color: colors.text,
        marginBottom: spacing[4], // '16px'
        paddingLeft: spacing[5], // '24px' for list indentation
      }}
    >
      {children}
    </Text>
  );
};
