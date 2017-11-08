'use strict';

const path = require('path');
const webpack = require('webpack');

const basePath = function(dest) {
  return path.resolve(__dirname, dest);
};

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.woff(\d*)\??(\d*)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?sourceMap"},
      { test: /\.css$/, loader: "style-loader!css-loader!sass-loader?sourceMap"}
    ],
  },
  resolve: {
    alias: {
      'vue$'        : 'vue/dist/vue.esm.js',
      'npm'         : basePath('node_modules'),
      'assets'      : basePath('src/assets'),
      'components'  : basePath('src/components'),
      'services'    : basePath('src/services'),
      'config'      : basePath('src/config'),
      'store'       : basePath('src/store'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "_": "lodash",
        "moment": "moment"
      }),
  ],
  devtool: '#eval-source-map',
  cache: true
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
