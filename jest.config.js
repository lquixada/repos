module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.reports/coverage',
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 85,
      lines: 85,
      statements: 85
    }
  }
}
