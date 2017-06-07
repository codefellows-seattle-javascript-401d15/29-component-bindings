// Karma configuration
// Generated on Wed May 31 2017 10:57:05 GMT-0700 (PDT)
const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/entry.js',
      'test/**/*-test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};
