const path = require('path');
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  context: __dirname,
  entry: "./frontend/medium_cup_of_joe.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': prod? `"production"`: '"development"'
      }
    })
  ]
};
