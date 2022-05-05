const custom = require('../webpack.config');

module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "staticDirs": ['../public'],

  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    }
  }
}