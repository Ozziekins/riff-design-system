import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';
import { HelpText } from '../HelpText/HelpText';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  options: SelectOption[];
  tone?: 'default' | 'error' | 'success';
  placeholder?: string;
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

const SelectWrapper = styled('div')`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled('select')<{ tone: 'default' | 'error' | 'success' }>`
  width: 100%;
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.body};
  padding: ${spacing[2]} ${spacing[5]} ${spacing[2]} ${spacing[2]};
  border: none;
  border-bottom: 1px solid
    ${({ tone }) =>
      tone === 'error'
        ? colors.error
        : tone === 'success'
        ? colors.success
        : colors.border};
  background-color: transparent;
  color: ${colors.text};
  line-height: ${typography.lineHeights.normal};
  appearance: none;
  cursor: pointer;

  &:disabled {
    color: ${colors['color-neutral-3']};
    border-bottom: 1px solid ${colors['color-neutral-2']};
    cursor: not-allowed;
  }
`;

const Chevron = styled('div')`
  position: absolute;
  right: ${spacing[2]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 2px solid ${colors.text};
    border-bottom: 2px solid ${colors.text};
    transform: rotate(-45deg);
  }
`;

export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  options,
  tone = 'default',
  placeholder,
  id,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
  ...rest
}) => {
  // Fallback id for linking label + helperText
  const selectId = id ?? `select-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = helperText ? `${selectId}-helper` : undefined;

  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={selectId}>{label}</StyledLabel>}

      <SelectWrapper>
        <StyledSelect
          id={selectId}
          tone={tone}
          role={role}
          aria-label={ariaLabel}
          aria-describedby={helperId ?? ariaDescribedBy}
          aria-hidden={ariaHidden}
          aria-invalid={tone === 'error'}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </StyledSelect>
        <Chevron />
      </SelectWrapper>

      {helperText && (
        <HelpText id={helperId} tone={tone}>
          {helperText}
        </HelpText>
      )}
    </Wrapper>
  );
};
