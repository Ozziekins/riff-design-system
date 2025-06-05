import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { spacing } from '../../../tokens/spacing';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  gap?: keyof typeof spacing;
  tone?: 'default' | 'error';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const StyledRadioGroup = styled(Box)<{ gap: keyof typeof spacing }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => spacing[gap]};
`;

const StyledLabel = styled('label')<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  gap = 2, // spacing[2] → '8px'
  tone = 'default',
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
}) => {
  return (
    <StyledRadioGroup
      role="radiogroup"
      gap={gap}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        return (
          <StyledLabel key={option.value} htmlFor={id} disabled={option.disabled}>
            <input
              type="radio"
              id={id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              aria-checked={selectedValue === option.value}
              disabled={option.disabled}
            />
            <Text
              as="span"
              color={
                option.disabled
                  ? 'color-neutral-3'
                  : tone === 'error'
                  ? 'error'
                  : 'text'
              }
            >
              {option.label}
            </Text>
          </StyledLabel>
        );
      })}
    </StyledRadioGroup>
  );
};
