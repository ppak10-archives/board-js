/**
 * webpack.config.js
 * Webpack configuration for use with package development server
 */

// Node Modules
const path = require('path');

module.exports = {
  entry: './dev',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dev/static'),
    filename: 'main.bundle.js',
  },
};
