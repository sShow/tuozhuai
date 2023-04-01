const postcssImportWebpackResolver = require('postcss-import-webpack-resolver');

module.exports = {
  plugins: [
    require('postcss-preset-env', {
      stage: 0,
      autoprefixer: {
        grid: true,
      },
    }),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-import', {
      resolve: postcssImportWebpackResolver({
        modules: ['src', 'node_modules'],
      }),
    }),
    require('postcss-url', {
      url: 'rebase',
    }),
    require('postcss-advanced-variables'),
  ],
};
