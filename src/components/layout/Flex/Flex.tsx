// src/components/layout/Flex/Flex.tsx

import React from 'react';

export interface FlexProps {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  direction?: 'row' | 'column';
  gap?: string;
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  justify = 'flex-start',
  align = 'stretch',
  direction = 'row',
  gap = '16px',
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        gap,
      }}
    >
      {children}
    </div>
  );
};
