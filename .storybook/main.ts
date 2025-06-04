import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "!../src/stories/**" // Ignore default boilerplate
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/riff-design-system/';
    }
    return config;
  },
  typescript: {
    reactDocgen: false, // DISABLE react-docgen
    check: true,
    reactDocgenTypescriptOptions: {},
  },

  docs: {
    defaultName: "Docs"
  },
};
export default config;