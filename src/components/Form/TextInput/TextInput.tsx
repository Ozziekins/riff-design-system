import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';
import { HelpText } from '../HelpText/HelpText';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  tone?: 'default' | 'error' | 'success';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
`;

const StyledLabel = styled('label')`
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.small};
  color: ${colors['color-neutral-4']};
`;

const StyledInput = styled('input')<{ tone: 'default' | 'error' | 'success' }>`
  width: 100%;
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

  &:disabled {
    color: ${colors['color-neutral-2']};
    border-bottom: 2px solid ${colors['color-neutral-2']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors['color-neutral-3']};
  }
    &:disabled::placeholder {
  color: ${colors['color-neutral-1']};
}
`;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  tone = 'default',
  id,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
  ...rest
}) => {
  // Fallback id for linking label + helperText
  const inputId = id ?? `textinput-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  return (
    <Wrapper>
      {label && (
        <StyledLabel htmlFor={inputId}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        id={inputId}
        tone={tone}
        role={role}
        aria-label={ariaLabel}
        aria-describedby={helperId ?? ariaDescribedBy}
        aria-hidden={ariaHidden}
        aria-invalid={tone === 'error'}
        {...rest}
      />
      {helperText && (
        <HelpText id={helperId} tone={tone}>
          {helperText}
        </HelpText>
      )}
    </Wrapper>
  );
};
