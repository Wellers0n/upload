import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  displayName: 'client',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testEnvironment: 'node',
  testMatch: ['**/**/**/*.test.ts'],
  coverageDirectory: './coverage',
  clearMocks: true,
  moduleNameMapper: {
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/models/(.*)$': '<rootDir>/src/models/$1',
    '^@/controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1'
  },
  restoreMocks: true,
  reporters: ['default']
  // setupFilesAfterEnv: ["./jest.setup.ts"],
}

export default config
