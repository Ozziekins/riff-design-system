import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing } from '../../../tokens/spacing';

export interface ParagraphProps {
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const StyledParagraph = styled(Text)`
  font-size: ${typography.sizes.small};
  font-weight: ${typography.weights.regular};
  line-height: ${typography.lineHeights.normal};
  font-family: ${typography.fonts.base};
  color: ${colors.text};
  margin-bottom: ${typography.spacing['400']}; /* 16px */
`;

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  return (
    <StyledParagraph
      as="p"
      role={role ?? 'paragraph'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </StyledParagraph>
  );
};
