const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
        env: {username: "Christabel",
  password: "123456", url: "http://www.demoblaze.com/"},
  projectId: "2en9j5",
        e2e: {
            experimentalRunAllSpecs:true,
          
       
            setupNodeEvents,
            specPattern: 'cypress/integration/BDD/*.feature',
      },
});
