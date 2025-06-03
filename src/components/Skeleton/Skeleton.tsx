// src/components/Skeleton/Skeleton.tsx

import React from 'react';
import { Box } from '../primitives/Box/Box';

export interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'rect' | 'circle' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '16px',
  variant = 'rect',
}) => {
  let computedWidth = width;
  let computedHeight = height;
  let computedRadius = '4px';

  if (variant === 'circle') {
    computedWidth = width === '100%' ? '40px' : width; // fallback default
    // force height = width for circle
    computedHeight = computedWidth;
    computedRadius = '50%';
  } else if (variant === 'text') {
    // text skeleton is usually thinner
    computedHeight = '1em';
    computedRadius = '4px';
  }

  return (
    <>
      <Box
        backgroundColor="#E0E0E0"
        borderRadius={computedRadius}
        style={{
          width: computedWidth,
          height: computedHeight,
          animation: 'skeleton-loading 1.2s infinite ease-in-out',
        }}
      />
      <style>
        {`
          @keyframes skeleton-loading {
            0% {
              background-color: #e0e0e0;
            }
            50% {
              background-color: #f0f0f0;
            }
            100% {
              background-color: #e0e0e0;
            }
          }
        `}
      </style>
    </>
  );
};
