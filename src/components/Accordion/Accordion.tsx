import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '../primitives/Box/Box';
import { Text } from '../primitives/Text/Text';
import { spacing } from '../../tokens/spacing';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  gap?: keyof typeof spacing;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

const AccordionContainer = styled(Box)<{ gap: keyof typeof spacing }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => spacing[gap]};
`;

const AccordionHeader = styled('button')<{ expanded: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.body};
  font-weight: ${typography.weights.medium};
  color: ${colors.text};
  background-color: transparent;
  border: none;
  padding: ${spacing[3]} 0;
  cursor: pointer;
  border-bottom: 1px solid ${colors.border};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors['color-primary-crimson-red']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const AccordionPanel = styled(Box)`
  padding: ${spacing[3]} 0;
  color: ${colors.text};
  font-size: ${typography.sizes.body};
`;

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  gap = 3, // spacing[3] = 12px
  ariaLabel,
  ariaDescribedBy,
}) => {
  const [openId, setOpenId] = useState(defaultOpenId ?? '');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <AccordionContainer
      gap={gap}
      role="region"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <Box key={item.id}>
            <AccordionHeader
              type="button"
              expanded={isOpen}
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-header-${item.id}`}
              aria-label={`Toggle ${item.title}`}
            >
              <Text as="span">{item.title}</Text>
              {isOpen ? (
                <ChevronUp size={20} color={colors['color-primary-crimson-red']} />
              ) : (
                <ChevronDown size={20} color={colors['color-primary-crimson-red']} />
              )}
            </AccordionHeader>
            {isOpen && (
              <AccordionPanel
                role="region"
                id={`accordion-panel-${item.id}`}
                aria-labelledby={`accordion-header-${item.id}`}
              >
                {item.content}
              </AccordionPanel>
            )}
          </Box>
        );
      })}
    </AccordionContainer>
  );
};
