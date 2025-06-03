// src/components/Form/HelpText/HelpText.tsx

import React from 'react'
import { Text } from '../../primitives/Text/Text'

export interface HelpTextProps {
  id?: string
  children: React.ReactNode
  tone?: 'default' | 'error' | 'success'
}

export const HelpText: React.FC<HelpTextProps> = ({
  id,
  children,
  tone = 'default',
}) => {
  const toneColors: Record<'default' | 'error' | 'success', 'text' | 'error' | 'success'> = {
  default: 'text',
  error: 'error',
  success: 'success',
}

  return (
    <Text
      as="p"
      id={id}
      fontSize="caption"
      color={toneColors[tone]}
      marginBottom="0"
    >
      {children}
    </Text>
  )
}
