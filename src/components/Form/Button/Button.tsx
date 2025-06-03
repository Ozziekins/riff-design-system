// src/components/Form/Button/Button.tsx

import React from 'react'
import { colors, typography, spacing, radii } from '../../../tokens'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'link'
  size?: 'small' | 'medium' | 'large'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
      border: 'none',
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.white,
      border: 'none',
    },
    destructive: {
      backgroundColor: colors.error,
      color: colors.white,
      border: 'none',
    },
    link: {
      backgroundColor: 'transparent',
      color: colors.primary,
      border: 'none',
      textDecoration: 'underline',
      padding: '0',
    },
  }

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: `${spacing[1]} ${spacing[2]}`,
      fontSize: typography.sizes.caption,
    },
    medium: {
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.sizes.body,
    },
    large: {
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: typography.sizes.heading,
    },
  }

  return (
    <button
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        fontFamily: typography.fonts.base,
        borderRadius: radii.md,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
