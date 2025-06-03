// src/components/Navigation/Anchor/Anchor.tsx

import React from 'react'
import { Text } from '../../primitives/Text/Text'
import { colors } from '../../../tokens'

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const Anchor: React.FC<AnchorProps> = ({ href, children, ...rest }) => {
  return (
    <a
      href={href}
      style={{
        color: colors.primary,
        textDecoration: 'underline',
        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = colors.secondary
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = colors.primary
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
