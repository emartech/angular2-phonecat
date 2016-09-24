'use strict';
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');
let ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    'main': './app/main.ts',
    'vendor': './app/vendor.ts',
    'style': './app/style.ts',
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  context: path.join(process.cwd(), 'src'),

  resolve: {
    root: [ path.join(process.cwd(), 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
    new ExtractTextPlugin('style.bundle.css'),
    new ProgressBarPlugin(),
    new ForkCheckerPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: [
          'awesome-typescript',
          'angular2-template'
        ]
      },
      { test: /\.html$/, loader: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
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
