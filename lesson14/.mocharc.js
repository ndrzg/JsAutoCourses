module.exports = {
//    require: ['chai'], // Load Chai expect assertions
    spec: 'test/**/*.spec.js', // Specify the test files pattern
    reporter: 'Nyan', // Set the reporter
    reporterOptions: {
      reporterEnabled: 'spec, mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
        mochaFile: './test-results/junit-report.xml',
      },
    },
  };