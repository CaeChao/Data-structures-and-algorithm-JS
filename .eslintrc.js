module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    expect: true,
    it: true,
    describe: true,
    beforeEach: true,
    afterEach: true,
    document: false,
    navigator: false,
    window: false
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'arrow-parens': 0,
    'no-console': 0,
    indent: ['error', 2],
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'after-used',
        vars: 'local',
        ignoreRestSiblings: true
      }
    ],
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-restricted-globals': 0,
    'no-multi-assign': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    curly: ['error', 'multi-line', 'consistent'],
    'padded-blocks': 0,
    'no-sparse-arrays': 0,
    'import/no-named-as-default': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': ['error', 'unix'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  }
};
