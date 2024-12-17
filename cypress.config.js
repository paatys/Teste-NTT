const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Ignorar erros de SSL
          launchOptions.args.push('--ignore-certificate-errors');
        }
        return launchOptions;
      });
    },
    defaultCommandTimeout: 8000,
  },
});
