module.exports = {
  semi: true,
  singleQuote: true,
  importOrder: [
    // external packages
    '<THIRD_PARTY_MODULES>',
    // internal packages
    '^@/',
    // relative
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx'],
  tailwindConfig: './tailwind.config.ts',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
