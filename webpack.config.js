'use strict';
let commonConfig = require('./webpack.common.config');
let webpack = require('webpack');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
let path = require('path');

let npmLifecycleEvent = process.env.npm_lifecycle_event || '';
let environment = process.env.NODE_ENV || '';

let commonPlugins = [
  new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
  new ExtractTextPlugin('style.bundle.css'),
  new ForkCheckerPlugin()
];
let cssLoader = { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }) };
let entry = {
  'main': './app/main.ts',
  'vendor': './app/vendor.ts',
  'style': './app/style.ts',
};
let output = {
  path: path.join(process.cwd(), 'dist'),
  filename: '[name].bundle.js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js'
};

if (npmLifecycleEvent == 'build' || environment == 'production') {
  module.exports = merge.smart(commonConfig, {
    entry: entry,
    output: output,

    plugins: commonPlugins.concat([
      new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true,
        htmlLoader: {
          attrs: false,
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      }),
      // new webpack.optimize.DedupePlugin(), #issue https://github.com/webpack/webpack/issues/2644
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: { screw_ie8 : true },
        compress: {
          screw_ie8: true,
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: 'index.html' },
        { from: 'favicon.ico' },
        { from: 'api', to: 'api' },
        { from: 'img', to: 'img' }
      ])
    ]),

    module: {
      rules: [cssLoader]
    },

    devtool: 'source-map'
  });
} else if (npmLifecycleEvent.indexOf('test') !== -1 || environment == 'test') {
  module.exports = merge.smart(commonConfig, {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true,
        minimize: false,
        htmlLoader: {
          attrs: false
        }
      })
    ],

    devtool: 'inline-source-map'
  });
} else {
  module.exports = merge.smart(commonConfig, {
    entry: entry,
    output: output,

    plugins: commonPlugins.concat([
      new webpack.LoaderOptionsPlugin({
        debug: true,
        minimize: false,
        htmlLoader: {
          attrs: false
        }
      })
    ]),

    module: {
      rules: [cssLoader]
    },

    devServer: {
      contentBase: './src',
      port: 3000,
      inline: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 500
      }
    },

    devtool: 'cheap-module-source-map'
  });
}
