import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<AvatarSize, string> = {
  sm: '32px',
  md: '40px',
  lg: '64px',
  xl: '96px',
};

export interface AvatarProps {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  initials?: string;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledAvatar = styled(Box)<{ size: AvatarSize }>`
  background-color: ${colors['color-neutral-1']}; // fallback background
  border-radius: 50%;
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => `calc(${sizeMap[size]} / 2)`};
  color: ${colors['color-neutral-4']};
`;

const StyledImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  src,
  alt,
  initials,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  return (
    <StyledAvatar
      as="div"
      size={size}
      role={role ?? 'img'}
      aria-label={ariaLabel ?? (alt || 'Avatar')}
      aria-describedby={ariaDescribedBy}
    >
      {src ? (
        <StyledImg src={src} alt={alt || 'Avatar'} />
      ) : (
        initials
      )}
    </StyledAvatar>
  );
};
