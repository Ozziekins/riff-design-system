import React from 'react';
import { Box } from '../../primitives/Box/Box';

export interface CardProps {
  children: React.ReactNode;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: string;
  borderRadius?: string;
}

const elevationMap = {
  none: 'none',
  sm: '0px 1px 3px rgba(0,0,0,0.1)',
  md: '0px 4px 6px rgba(0,0,0,0.1)',
  lg: '0px 10px 15px rgba(0,0,0,0.1)',
};

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 'md',
  padding = '16px',
  borderRadius = '8px',
}) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius={borderRadius}
      style={{
        boxShadow: elevationMap[elevation],
        padding,
      }}
    >
      {children}
    </Box>
  );
};
