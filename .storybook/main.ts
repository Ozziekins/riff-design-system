// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // '!../src/stories/**' // Ignore default boilerplate
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
    '@storybook/blocks'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [],
  viteFinal: async (config, { configType }) => {
    config.base = '/riff-design-system/storybook/';
    return config;
  },
  typescript: {
    reactDocgen: false,
    check: true,
    reactDocgenTypescriptOptions: {},
  },
  docs: {
    defaultName: 'Docs',
  },
};

export default config;
