// src/components/Form/RadioGroup/RadioGroup.tsx

import React from 'react'
import { Box } from '../../primitives/Box/Box'
import { Text } from '../../primitives/Text/Text'

export interface RadioOption {
  value: string
  label: string
}

export interface RadioGroupProps {
  name: string
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Box role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {options.map((option) => (
        <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          <Text as="span">{option.label}</Text>
        </label>
      ))}
    </Box>
  )
}
