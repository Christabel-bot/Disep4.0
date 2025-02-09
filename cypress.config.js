const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
  projectId: 'k2cuq7',
        env: {username: "Christabel",
  password: "123456", url: "http://www.demoblaze.com/"},

        e2e: {
            experimentalRunAllSpecs:true,
          
       
            setupNodeEvents,
            specPattern: 'cypress/integration/BDD/*.feature',
      },
});
