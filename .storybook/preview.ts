import type { Preview } from '@storybook/react-vite'
import '../src/index.css';

const preview: Preview = {
  parameters: {
    docs: {
    description: {
      component: '[Design System Notion Page](https://sulfuric-brochure-f82.notion.site/Riff-Design-System-1ffa2e13c8058068b74ece79f158b377)',
    },
  },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;