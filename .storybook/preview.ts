import type { Preview, Decorator } from '@storybook/react-vite';
import '../src/index.css'; // global styles
import React from 'react'; // needed because we will call React.createElement

const decorators: Decorator[] = [
  (Story) => {
    return React.createElement(
      'div',
      { style: { padding: '2rem', backgroundColor: '#ffffff' } },
      React.createElement(Story)
    );
  },
];

const preview: Preview = {
  decorators,
  parameters: {
    docs: {
    description: {
      component: '[Design System Notion Page](https://www.notion.so/Riff-Design-System-1ffa2e13c8058068b74ece79f158b377)',
    },
  },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    a11y: {
      context: '#root',
      manual: false,
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Primitives',
          'Typography',
          'Form',
          'Display',
          'Navigation',
          'Layout',
        ],
      },
    },
  },
};

export default preview;
