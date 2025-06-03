// src/components/Navigation/Tabs/Tabs.tsx

import React, { useState } from 'react'
import { Box } from '../../primitives/Box/Box'
import { Button } from '../../Form/Button/Button'

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultActiveId?: string
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveId }) => {
  const [activeId, setActiveId] = useState(defaultActiveId ?? tabs[0].id)

  const activeTab = tabs.find((tab) => tab.id === activeId)

  return (
    <Box>
      <Box style={{ display: 'flex', gap: '8px', marginBottom: '16px' }} role="tablist">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            variant={tab.id === activeId ? 'primary' : 'secondary'}
            role="tab"
            aria-selected={tab.id === activeId}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      <Box role="tabpanel">
        {activeTab?.content}
      </Box>
    </Box>
  )
}
