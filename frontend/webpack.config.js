const path               = require('path');
const webpack            = require('webpack');
const htmlPlugin         = require('html-webpack-plugin');
const openBrowserPlugin  = require('open-browser-webpack-plugin');
const dashboardPlugin    = require('webpack-dashboard/plugin');
const autoprefixer       = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

const prod = process.argv.indexOf('-p') !== -1;

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});

const PATHS = {
  workdir: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/index.jsx'),
  assets: path.join(__dirname,'src/assets'),
  styles: path.join(__dirname,'src/assets/styles'),
  components: path.join(__dirname,'src/components'),
  build: path.join(__dirname, 'dist'),
};

const options = {
  host:'localhost',
  port:'8081'
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    stats: 'errors-only',
    host: options.host,
    port: options.port
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|assets)/,
        use: [
          {
            loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=stage-0,presets[]=react',
          }
        ]
      },
      {
        test: /\.(sass)$/,
        include: PATHS.styles,
        use: extractSass.extract({
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ],
            // use style-loader in development
            fallback: 'style-loader'
        })
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader?-removeOptionalTags' }
        ]
      }
    ]
  },
  plugins: [
    extractSass,
    new htmlPlugin({
      template: path.join(PATHS.workdir, 'assets/index.html'),
      inject: 'body',
      favicon: path.join(PATHS.workdir, 'assets/favicon.png'),
      root: path.resolve(PATHS.workdir, 'assets'),
      attrs: ['img:src', 'link:href']
    })
  ]
};

const extraPlugins = [];

if (prod) {
  extraPlugins.push(
    new CleanWebpackPlugin(['dist'])
  );
} else {
  extraPlugins.push(new dashboardPlugin());
  extraPlugins.push(
    new htmlPlugin({
      template: path.join(PATHS.workdir, 'assets/index.html'),
      inject: 'body',
      favicon: path.join(PATHS.workdir, 'assets/favicon.png'),
      root: path.resolve(PATHS.workdir, 'assets'),
      attrs: ['img:src', 'link:href']
    })
  );
  // extraPlugins.push(
  //   new webpack.HotModuleReplacementPlugin({
  //     multiStep: true
  //   }),
  // );
  extraPlugins.push(
    new openBrowserPlugin({
      url: `http://${options.host}:${options.port}`
    })
  );
}

Array.prototype.push.apply(module.exports.plugins, extraPlugins);
