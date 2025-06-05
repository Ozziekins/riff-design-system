import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '../../primitives/Box/Box';
import { Button } from '../../Form/Button/Button';
import { spacing } from '../../../tokens/spacing';

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
          <Button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            variant={tab.id === activeId ? 'primary' : 'secondary'}
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </Button>
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
