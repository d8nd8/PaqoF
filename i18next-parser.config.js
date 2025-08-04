export default {
  locales: ['en'],
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'src/i18n/translations/$LOCALE/$NAMESPACE.json',
  defaultNamespace: 'translation',
  defaultValue: (lng, ns, key) => key,
  indentation: 2,
  keepRemoved: false,
  createOldCatalogs: false,
  keySeparator: '.',
  namespaceSeparator: ':',
  pluralSeparator: '_',
  verbose: false,
}
