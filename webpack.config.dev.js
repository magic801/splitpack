const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

module.exports = {
  // devtool: '#source-map',

  entry: {
    jquery: ['jquery'],
    index: './src/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: 'vendor',
  //         chunks: 'initial'
  //       }
  //     }
  //   }
  // },

  resolve: {
    alias: {
      // jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index', 'jquery'],
      template: path.join(__dirname, 'index.html')
    })
    // new PrepackWebpackPlugin({})
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['latest']
        }
      }
    }]
  }
}