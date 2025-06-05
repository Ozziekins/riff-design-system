// src/components/Callout/Callout.types.ts

import React from 'react';

export type CalloutVariant = 'info' | 'success' | 'warning' | 'error';

export interface CalloutProps {
  variant?: CalloutVariant;
  title: string;
  children: React.ReactNode;
}
