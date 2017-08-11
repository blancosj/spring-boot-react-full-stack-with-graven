const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

module.exports = {
   // the entry file for the bundle
   entry:
      path.join(__dirname, '/client/src/app.jsx'
   ),

   // the bundle file we will get in the result
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'app.js'
   },

   devtool: 'source-map',

   devServer: {
      proxy: {
         '/api': {
            target: 'http://localhost:9000',
            secure: false
         }
      }
  },

   module: {
      // apply loaders to files that meet given conditions
      rules: [{
         test: /\.jsx?$/,
         include: path.join(__dirname, '/client/src'),
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
            presets: ['react', 'es2015']
         }
      }, {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader' ]
         }),
         exclude: ['node_modules']
      }]
   },

   // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
   watch: true,

   plugins: [
      new ExtractTextPlugin('style.css'),
      new DashboardPlugin(),
      new HtmlWebpackPlugin({
         title: 'Home',
         template: 'client/src/assets/template.html'
      })
   ]
};
