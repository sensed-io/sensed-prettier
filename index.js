const attributeOptions = {
  plugins: [require.resolve('prettier-plugin-organize-attributes')],
  attributeSort: 'ASC',
  attributeGroups: [
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$ID',
    '$CLASS',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],
};

module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  overrides: [
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['package-lock.json'],
      options: {
        parser: 'json-stringify',
      },
    },
    {
      files: ['package.json', 'ng-package.json'],
      options: {
        parser: 'json-stringify',
        plugins: [
          require.resolve(
            require('node:path').resolve(
              __dirname,
              'plugins',
              'sort-package-json.js'
            )
          ),
        ],
      },
    },
    {
      files: ['*.less'],
      options: { parser: 'less' },
    },
    {
      files: ['*.scss'],
      options: { parser: 'scss' },
    },
    {
      files: ['*.xml'],
      options: {
        parser: 'xml',
        plugins: [require.resolve('@prettier/plugin-xml')],
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: { tabWidth: 2, parser: 'yaml' },
    },
    {
      files: ['*.md'],
      options: { tabWidth: 2, parser: 'markdown' },
    },
    {
      files: ['*.html'],
      options: {
        printWidth: 120,
        parser: 'angular',
        ...attributeOptions,
      },
    },
    {
      files: ['*.js', '*.ts'],
      options: {
        ...attributeOptions,
        printWidth: 90,
        parser: 'typescript',
      },
    },
    {
      files: '*.svg',
      options: require(
        require('node:path').resolve(__dirname, 'options', 'svg.js')
      ),
    },
  ],
  printWidth: 120,
  tabWidth: 4,
  arrowParens: 'always',
  bracketSpacing: false,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  proseWrap: 'always',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
};
