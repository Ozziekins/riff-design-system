import React from 'react';
import { Box } from '../../primitives/Box/Box';

export interface AvatarProps {
  size?: string;
  src?: string;
  alt?: string;
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = '40px',
  src,
  alt,
  initials,
}) => {
  return (
    <Box
      as="div"
      backgroundColor="#E0E0E0"
      borderRadius="50%"
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(${size} / 2)`,
        color: '#555',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        initials
      )}
    </Box>
  );
};
