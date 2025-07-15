import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  
  // Re-enable essential addons, keep suspects disabled
  addons: [
    "@storybook/addon-onboarding", // <- Keep disabled
    "@chromatic-com/storybook",    // <- Keep disabled
    "@storybook/addon-docs",         // <- Re-enable
    "@storybook/addon-a11y",         // <- Re-enable
    "@storybook/addon-vitest"        // <- Keep disabled
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  // viteFinal: async (config) => {
  //   config.base = '/riff-design-system/';
  //   return config;
  // },
  typescript: {
    reactDocgen: false,
    check: true,
    reactDocgenTypescriptOptions: {},
  },
};
export default config;