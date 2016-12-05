'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var config = require('./config');
console.log(path.resolve(__dirname, 'app', 'index.js'));
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      // util: path.resolve(__dirname, './app/common/util')
    },
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    jquery: 'jQuery',
    materialize: 'Materialize',
    react: 'React'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'indexTemplate.ejs'),
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: true,
      modules: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'APP_CONFIG': JSON.stringify(config.get('app')),
        'TEMPLATE_CONFIG': JSON.stringify(config.get('template'))
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'html?limit=20000?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=20000?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      exclude: /node_modules/
    }, {
      test: /\.json?$/,
      loader: 'json',
      exclude: /node_modules/
    }, {
      test: /\.svg?$/,
      loader: 'file?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
