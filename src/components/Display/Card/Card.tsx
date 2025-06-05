import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { colors } from '../../../tokens/colors';
import { spacing } from '../../../tokens/spacing';
import { radii } from '../../../tokens/radii';
import { shadows } from '../../../tokens/shadows';

export type CardElevation = keyof typeof shadows;
export type CardPadding = keyof typeof spacing;
export type CardRadius = keyof typeof radii;

export interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode; // body
  actions?: React.ReactNode;
  elevation?: CardElevation;
  padding?: CardPadding;
  borderRadius?: CardRadius;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
}

const StyledCard = styled(Box)<{
  elevation: CardElevation;
  padding: CardPadding;
  borderRadius: CardRadius;
}>`
  background-color: ${colors.background};
  box-shadow: ${({ elevation }) => shadows[elevation]};
  border-radius: ${({ borderRadius }) => radii[borderRadius]};
  padding: ${({ padding }) => spacing[padding]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]}; 
`;

const CardTitle = styled(Text)`
  font-size: ${spacing[5]}; 
  font-weight: 700;
`;

const CardActions = styled(Box)`
  display: flex;
  gap: ${spacing[2]};
`;

export const Card: React.FC<CardProps> = ({
  title,
  children,
  actions,
  elevation = 'md',
  padding = 4,
  borderRadius = 'md',
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-hidden': ariaHidden,
}) => {
  return (
    <StyledCard
      elevation={elevation}
      padding={padding}
      borderRadius={borderRadius}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
    >
      {title && <CardTitle as="h3">{title}</CardTitle>}
      <Box as="div">{children}</Box>
      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  );
};
