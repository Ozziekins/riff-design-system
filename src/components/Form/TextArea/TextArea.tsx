import React from 'react'
import { Box } from '../../primitives/Box/Box'
import { colors, typography, spacing, radii } from '../../../tokens'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export const TextArea: React.FC<TextAreaProps> = ({ hasError = false, ...rest }) => {
  return (
    <Box>
      <textarea
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
