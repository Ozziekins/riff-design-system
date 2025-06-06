import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../tokens/colors';
import { ArrowRight, ExternalLink } from 'lucide-react'; 

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'internal' | 'external';
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledAnchor = styled('a')`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  color: ${colors.black};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
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
  const isExternal = variant === 'external';

  return (
    <StyledAnchor
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      role={role ?? 'link'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...rest}
    >
      {children}
      {isExternal ? <ExternalLink /> : <ArrowRight />}
    </StyledAnchor>
  );
};
