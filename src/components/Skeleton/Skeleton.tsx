import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../primitives/Box/Box';
import { colors } from '../../tokens/colors';

export interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'rect' | 'circle' | 'text';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledSkeleton = styled(Box)`
  animation: skeleton-loading 1.2s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${colors.skeletonBase ?? '#e0e0e0'};
    }
    50% {
      background-color: ${colors.skeletonHighlight ?? '#f0f0f0'};
    }
    100% {
      background-color: ${colors.skeletonBase ?? '#e0e0e0'};
    }
  }
`;

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '16px',
  variant = 'rect',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  let computedWidth = width;
  let computedHeight = height;
  let computedRadiusKey: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'sm';

  if (variant === 'circle') {
    computedWidth = width === '100%' ? '40px' : width;
    computedHeight = computedWidth;
    computedRadiusKey = 'full'; 
  } else if (variant === 'text') {
    computedHeight = '1em';
    computedRadiusKey = 'sm';
  }

  return (
    <StyledSkeleton
      backgroundColor="skeletonBase"
      borderRadius={computedRadiusKey}
      style={{
        width: computedWidth,
        height: computedHeight,
      }}
      role={role ?? 'presentation'}
      aria-hidden="true"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    />
  );
};
