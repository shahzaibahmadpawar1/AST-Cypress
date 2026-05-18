const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    setupNodeEvents(on, config) {},
  },
})