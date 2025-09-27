export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '..',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  testMatch: [
    '<rootDir>/tests/**/*.test.{ts,tsx}',
  ],
};