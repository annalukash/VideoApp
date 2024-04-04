module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        version: '2023-05',
      },
    ],
    ['@babel/plugin-transform-class-static-block'],
  ],
  assumptions: {
    setPublicClassFields: true,
    privateFieldsAsSymbols: true,
  },
};
