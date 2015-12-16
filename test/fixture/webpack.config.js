const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './asset.js')
  },

  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs',
    path: __dirname,
  },

  module: {
    loaders: [
      {
        test: /\.js$/i,
        loader: path.join(__dirname, '../../index.js'),
      }
    ]
  },

  target: 'node',
};
