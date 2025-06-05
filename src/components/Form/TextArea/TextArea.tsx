import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  tone?: 'default' | 'error' | 'success';
  disabled?: boolean;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const StyledTextArea = styled('textarea')<{ tone: 'default' | 'error' | 'success'; disabled?: boolean }>`
  width: 100%;
  min-height: 120px; /* make taller by default */
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.body};
  padding: ${spacing[2]} 0 ${spacing[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({ tone }) =>
      tone === 'error'
        ? colors.error
        : tone === 'success'
        ? colors.success
        : colors.black};
  background-color: transparent;
  color: ${colors.text};
  line-height: ${typography.lineHeights.normal};
  outline: none;
  resize: vertical; /* allow user to resize vertically */

  &:disabled {
    color: ${colors['color-neutral-2']};
    border-bottom: 2px solid ${colors['color-neutral-2']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors['color-neutral-3']};
  }

  &:disabled::placeholder {
    color: ${colors['color-neutral-2']};
  }
`;


export const TextArea: React.FC<TextAreaProps> = ({
  tone = 'default',
  disabled = false,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
  ...rest
}) => {
  return (
    <StyledTextArea
      tone={tone}
      disabled={disabled}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
      aria-invalid={tone === 'error'}
      {...rest}
    />
  );
};
