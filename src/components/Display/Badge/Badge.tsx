import React from 'react';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens';

export type BadgeTone = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'primary',
}) => {
  const background = colors[tone as keyof typeof colors];
  const textColor = colors[`${tone}Text` as keyof typeof colors] ?? colors.text;

  return (
    <Box
      as="span"
      backgroundColor={background}
      borderRadius="12px"
      padding="4px 8px"
      style={{
        display: 'inline-block',
      }}
    >
      <Text as="span" fontSize="caption" fontWeight="medium" color={textColor}>
        {children}
      </Text>
    </Box>
  );
};
