module.exports = {
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'testEnvironment': 'jsdom',
  'testMatch': [
    '<rootDir>/src/**/*.spec.js'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/src/__tests__/setup.js',
  'collectCoverage': true,
  'coverageDirectory': '<rootDir>/.reports/coverage',
  'coverageThreshold': {
    'global': {
      'branches': 50,
      'functions': 50,
      'lines': 50,
      'statements': 50
    }
  }
};
