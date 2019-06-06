module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@assets/(.*)$': '<rootDir>/assets/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@router/(.*)$': '<rootDir>/src/router/$1',
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@store/(.*)$': '<rootDir>/src/store/$1',
        '^@views/(.*)$': '<rootDir>/src/views/$1',
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
    testURL: 'http://localhost/',
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
