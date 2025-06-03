// src/components/primitives/Text/Text.types.ts
import React from 'react';
import { colors } from '../../../tokens';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  cx?: any;
  fontFamily?: 'base' | 'serif' | 'altSans';
  fontSize?: 'body' | 'heading' | 'caption';
  fontWeight?: 'regular' | 'medium' | 'bold';
  color?: keyof typeof colors | string;
  marginBottom?: string;
  lineHeight?: 'normal' | 'relaxed' | 'tight';
  children: React.ReactNode;
}

