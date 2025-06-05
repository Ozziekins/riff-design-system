import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';
import { radii } from '../../../tokens/radii';

export type ButtonVariant =
  | 'primary'
  | 'primaryBlack'
  | 'secondary'
  | 'secondaryBlack'
  | 'tertiary'
  | 'tertiaryBlack';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'small' | 'large';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const SIZE_STYLES = {
  small: {
    padding: `${spacing[3]} ${spacing[3]}`,
    fontSize: typography.sizes.caption,
  },
  large: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.sizes.body,
  },
};

const StyledButton = styled('button')<{
  variant: ButtonVariant;
  size: 'small' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fonts.base};
  font-weight: ${typography.weights.medium};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-radius: ${radii.md};
  transition: all 0.2s ease;
  padding: ${({ size = 'small' }) => SIZE_STYLES[size].padding};
  font-size: ${({ size = 'small' }) => SIZE_STYLES[size].fontSize};

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: ${colors.button.primary.background};
    color: ${colors.button.primary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${colors.button.primary.hover};
    }

    &:active:not(:disabled) {
      background-color: ${colors.button.primary.active};
    }

    &:disabled {
      background-color: ${colors.button.primary.disabledBg};
      color: ${colors.button.primary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant }) =>
    variant === 'primaryBlack' &&
    `
    background-color: ${colors.button.primaryBlack.background};
    color: ${colors.button.primaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${colors.button.primaryBlack.hover};
    }

    &:active:not(:disabled) {
      background-color: ${colors.button.primaryBlack.active};
    }

    &:disabled {
      background-color: ${colors.button.primaryBlack.disabledBg};
      color: ${colors.button.primaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: transparent;
    color: ${colors.button.secondary.text};
    border: 2px solid ${colors.button.secondary.border};

    &:hover:not(:disabled) {
      border-color: ${colors.button.secondary.hoverBorder};
    }

    &:active:not(:disabled) {
      border-color: ${colors.button.secondary.activeBorder};
    }

    &:disabled {
      border-color: ${colors.button.secondary.disabledBorder};
      color: ${colors.button.secondary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant }) =>
    variant === 'secondaryBlack' &&
    `
    background-color: transparent;
    color: ${colors.button.secondaryBlack.text};
    border: 2px solid ${colors.button.secondaryBlack.border};

    &:hover:not(:disabled) {
      border-color: ${colors.button.secondaryBlack.hoverBorder};
    }

    &:active:not(:disabled) {
      border-color: ${colors.button.secondaryBlack.activeBorder};
    }

    &:disabled {
      border-color: ${colors.button.secondaryBlack.disabledBorder};
      color: ${colors.button.secondaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    `
    background-color: transparent;
    color: ${colors.button.tertiary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${colors.button.tertiary.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${colors.button.tertiary.activeBg};
    }

    &:disabled {
      color: ${colors.button.tertiary.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

  ${({ variant }) =>
    variant === 'tertiaryBlack' &&
    `
    background-color: transparent;
    color: ${colors.button.tertiaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${colors.button.tertiaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${colors.button.tertiaryBlack.activeBg};
    }

    &:disabled {
      color: ${colors.button.tertiaryBlack.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'small',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      role={role} // optional override
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
      aria-disabled={disabled} // accessibility state 
      disabled={disabled} // native disabled
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
