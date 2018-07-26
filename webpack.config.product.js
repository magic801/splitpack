const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

module.exports = {

  entry: {
    // jquery: 'jquery',
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        cjq: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true
        },
        // ci: {
        //   name: 'index',
        //   chunks: 'initial',
        //   enforce: true
        // }
      }
    }
  },

  resolve: {
    alias: {
      // jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      // $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title:'test webpack',
      // chunks: ['index', 'jquery']
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