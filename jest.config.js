module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.{js,ts,tsx}'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.ts',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(jsx?|ts|tsx)$': 'babel-jest'
  },
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.reports/coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 95,
      lines: 95,
      statements: 95
    }
  }
}
