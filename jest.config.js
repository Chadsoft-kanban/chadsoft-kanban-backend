module.exports = {
  preset: '@shelf/jest-mongodb',
  testMatch: ['**/**/*.test.js'],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
};
