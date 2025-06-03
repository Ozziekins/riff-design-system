// src/components/Form/Select/Select.tsx

import React from 'react'
import { Box } from '../../primitives/Box/Box'
import { colors, typography, spacing, radii } from '../../../tokens'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  hasError?: boolean
}

export const Select: React.FC<SelectProps> = ({
  options,
  hasError = false,
  ...rest
}) => {
  return (
    <Box>
      <select
        style={{
          width: '100%',
          fontFamily: typography.fonts.base,
          fontSize: typography.sizes.body,
          padding: `${spacing[2]} ${spacing[3]}`,
          borderRadius: radii.sm,
          border: `1px solid ${hasError ? colors.error : colors.border}`,
          backgroundColor: colors.white,
          color: colors.text,
          lineHeight: typography.lineHeights.normal,
        }}
        aria-invalid={hasError}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </Box>
  )
}
