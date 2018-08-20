module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest'
  },
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.reports/coverage',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 80,
      lines: 85,
      statements: 85
    }
  }
}
