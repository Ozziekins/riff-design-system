// src/components/layout/Stack/Stack.tsx

import React from 'react';

type Direction = 'vertical' | 'horizontal';

export interface StackProps {
  direction?: Direction;
  gap?: string;
  children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  gap = '16px',
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap,
      }}
    >
      {children}
    </div>
  );
};
