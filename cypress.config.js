const { defineConfig } = require("cypress");

module.es = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
    "reporter" : "junit",
  "reporterOptions" : {
    "mochaFile" : "results/results-[hash].xml" } 
  
  });
