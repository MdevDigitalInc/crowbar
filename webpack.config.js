// MDEV Digital - Webpack Boilerplate[VueJS]
// Webpack 4 Configuration file
// -----------------------------------------
// PRODUCTION ENVIRONMENT
// ----------------------------------------

// Required Imports
const {resolve} = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer');

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

// Module Exports
module.exports = {

  entry: './index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'build.js'
  },

  // Modules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "to-string!css-loader?minimize&-autoprefixer!postcss-loader!sass-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader?minimize&-autoprefixer!postcss-loader!sass-loader' },
            { loader: 'sass-loader'},
            { loader: 'postcss-loader'}
          ]
        })
      }

    ]
  },

  //plugins
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } }),
    new ExtractTextPlugin("/compiled/styles.css"),
    new StyleLintPlugin({
      syntax: 'scss',
      configFile: './.stylelintrc'
    })
  ]

}
