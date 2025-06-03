import React from 'react';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
}) => {
  const background = colors[`${variant}Background` as keyof typeof colors];
  const border = colors[`${variant}Border` as keyof typeof colors];
  const text = colors[`${variant}Text` as keyof typeof colors];

  return (
    <Box
      backgroundColor={background}
      borderWidth="1px"
      borderColor={border}
      borderRadius="6px"
      padding="12px 16px"
      margin="16px 0"
    >
      <Text as="div" fontSize="body" color={text}>
        {children}
      </Text>
    </Box>
  );
};
