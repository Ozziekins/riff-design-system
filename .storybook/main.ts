import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "!../src/stories/**" // Ignore default boilerplate
  ],
  "addons": [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
    '@storybook/addon-styling',
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config) => {
    config.base = '/riff-design-system/';
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