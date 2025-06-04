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
    config.build = {
      ...config.build,
      rollupOptions: {
        ...(config.build?.rollupOptions || {}),
        output: {
          ...(config.build?.rollupOptions?.output || {}),
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    };
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