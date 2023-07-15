module.exports = {
//    require: ['chai'],
    spec: 'test/**/*.spec.js', 
    reporter: 'Nyan', 
    reporterOptions: {
      reporterEnabled: 'spec, mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
        mochaFile: './test-results/junit-report.xml',
      },
    },
  };