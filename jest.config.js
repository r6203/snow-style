module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@r6203/(.+)$': '<rootDir>packages/$1/src',
  },
  modulePathIgnorePatterns: ['lib'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  //setupFilesAfterEnv: ['<rootDir>setupTests.js'],
};
