'use strict';
let path = require('path');

module.exports = {
  context: path.join(process.cwd(), 'src'),

  resolve: {
    root: [ path.join(process.cwd(), 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: [
          'awesome-typescript',
          'angular2-template'
        ]
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
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
