module.exports = {
  "stories": [
    "../projects/skeleton-forms/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-pseudo-states"
  ],
  "framework": {
    name: "@storybook/angular",
    options: {}
  },

  docs: {
    autodocs: true
  }

}