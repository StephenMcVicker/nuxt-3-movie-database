module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@nuxtjs'
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    'vue',
    '@typescript-eslint/recommended'
  ],
  rules: {
    // enforce the use of single quotes
    'quotes': ['error', 'single'],

    // enforce consistent indentation
    // set to 2 spaces, adjust as needed
    'indent': ['error', 2],

    // require semicolons at the end of statements
    'semi': ['error', 'always'],

    // disallow unused variables
    'no-unused-vars': 'error',

    // require object keys to be quoted
    'quote-props': ['error', 'consistent'],

    // disallow the use of console.log, alert, etc.
    'no-console': 'error',

    // require camelcase variable names
    'camelcase': ['error', { properties: 'never' }]
  }
};
