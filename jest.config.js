/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Jest's default file crawler is watchman, which registers a PERSISTENT
  // watch on whatever checkout it runs in -- CI runner _work dirs and git
  // worktrees included, where nothing needs watching. Those watches then
  // churn on every npm ci / tsc / git clean, which pinned watchman and
  // FSEvents at high CPU for days. One-shot runs don't need it; the node
  // crawler is fine.
  watchman: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
  ],
};
