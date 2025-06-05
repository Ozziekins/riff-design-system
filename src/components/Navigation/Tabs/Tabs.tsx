import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Text } from '../../primitives/Text/Text';
import { spacing } from '../../../tokens/spacing';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultActiveId?: string;
  gap?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
}

const TabList = styled(Box)<{ gap: keyof typeof spacing; marginBottom: keyof typeof spacing }>`
  display: flex;
  gap: ${({ gap }) => spacing[gap]};
  margin-bottom: ${({ marginBottom }) => spacing[marginBottom]};
`;

const TabButton = styled('button')<{ selected: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.body};
  font-weight: ${typography.weights.medium};
  color: ${({ selected }) => (selected ? colors['color-primary-crimson-red'] : colors['color-neutral-4'])};
  border-bottom: ${({ selected }) => (selected ? `4px solid ${colors['color-primary-crimson-red']}` : '4px solid transparent')};
  transition: color 0.2s ease, border-bottom 0.2s ease;

  &:hover:not(:disabled) {
    color: ${colors['color-primary-crimson-red']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveId,
  gap = 2, // spacing[2] = 8px
  marginBottom = 4, // spacing[4] = 16px
}) => {
  const [activeId, setActiveId] = useState(defaultActiveId ?? tabs[0].id);

  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <Box as="section" role="region" aria-label="Tabs">
      <TabList
        role="tablist"
        gap={gap}
        marginBottom={marginBottom}
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            selected={tab.id === activeId}
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>

      <Box
        role="tabpanel"
        id={`tabpanel-${activeId}`}
        aria-labelledby={`tab-${activeId}`}
      >
        {activeTab?.content}
      </Box>
    </Box>
  );
};
