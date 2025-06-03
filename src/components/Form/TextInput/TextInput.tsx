import React from 'react'
import { Box } from '../../primitives/Box/Box'
import { colors, typography, spacing, radii } from '../../../tokens'

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({ hasError = false, ...rest }) => {
  return (
    <Box>
      <input
        style={{
          width: '100%',
          fontFamily: typography.fonts.base,
          fontSize: typography.sizes.body,
          padding: `${spacing[2]} ${spacing[3]}`,
          borderRadius: radii.md,
          border: `1px solid ${hasError ? colors.error : colors.border}`,
          backgroundColor: colors.background,
          color: colors.text,
          lineHeight: typography.lineHeights.normal,
        }}
        aria-invalid={hasError}
        {...rest}
      />
    </Box>
  )
}
