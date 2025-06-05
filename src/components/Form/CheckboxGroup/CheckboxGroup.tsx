import React from 'react';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { spacing } from '../../../tokens/spacing';

export interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  gap?: keyof typeof spacing;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  selectedValues,
  onChange,
  gap = 2,
  ariaLabel,
  ariaDescribedBy,
}) => {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <Box
      role="group"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[gap],
      }}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing[2],
            opacity: option.disabled ? 0.6 : 1,
            cursor: option.disabled ? 'not-allowed' : 'pointer',
          }}
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            disabled={option.disabled}
          />
          <Text as="span">{option.label}</Text>
        </label>
      ))}
    </Box>
  );
};
