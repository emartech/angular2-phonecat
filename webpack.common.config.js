'use strict';
let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: path.join(process.cwd(), 'src'),

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.ts', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          'awesome-typescript',
          'angular2-template'
        ]
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint'
      },
      {
        test: /\.js$/,
        loader: 'source-map',
        exclude: [
          path.join(process.cwd(), 'node_modules/rxjs'),
          path.join(process.cwd(), 'node_modules/@angular')
        ]
      },
      { test: /\.html$/, loader: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'src')
    )
  ],

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
