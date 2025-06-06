import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'internal' | 'internalRed' | 'external' | 'externalRed';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledAnchor = styled('a')<Pick<AnchorProps, 'variant'>>`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  color: ${({ variant }) =>
    variant === 'internalRed' || variant === 'externalRed'
      ? colors['color-primary-crimson-red']
      : colors.black};

  &:hover,
  &:focus {
    color: ${colors.black};
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const Anchor: React.FC<AnchorProps> = ({
  href,
  variant = 'internal',
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...rest
}) => {
  const isExternal = variant === 'external' || variant === 'externalRed';

  return (
    <StyledAnchor
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      role={role ?? 'anchor'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      variant={variant}
      {...rest}
    >
      {children}
      {isExternal ? <ExternalLink /> : <ArrowRight />}
    </StyledAnchor>
  );
};
