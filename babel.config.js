module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          assets: './assets',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
};
