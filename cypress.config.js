const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "bqsgmh",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  env: {
    db: 
    {
      host: '192.168.90.45',
      port: 30037,
      user: 'teconsole',
      password: 'teconsole!',
      database: 'TE_SSO',
    },
    id:{
      "username": "a2492786091@gmail.com",
      "password": "Rulai30126",
      "tel":"0958008994"
    }
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: true,
  },
})
