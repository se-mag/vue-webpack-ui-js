// webpack.development.config.js
'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'img/[name][ext][query]',
    clean: true, // Clean the output directory before emit.
  },
  devServer: {
    historyApiFallback: true,
    // watchFiles: [path.resolve(__dirname, 'src')],
    static: {
      directory: devMode ? path.join(__dirname, 'src') : path.join(__dirname, 'public'),
      watch: true
    },
    port: 5001, // default 8080
    open: true, // quick launch browser
    hot: true, // HMR hot module reloading
    compress: true,
    allowedHosts: ['localhost:8080'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      }, // yarn add -D @babel/core babel-loader @babel/preset-env
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../styles',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      // the following resources built-in with webpack 5
      // 'asset', 'asset/resource', 'inline',
      {test: /\.(png|svg|jpe?g|gif|ico|webp)$/i, type: 'asset/resource'},
      {test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource'},
      // {test: /\.json5$/i, type: 'json', parser: {parse: json5.parse}},   // yarn add -D json5
      // {test: /\.(csv|tsv)$/i, use: ['csv-loader']},                      // yarn add -D csv-loader
      // {test: /\.xml$/i, use: ['xml-loader']},                            // yarn add -D xml-loader
    ]
  },
  plugins: [
    // Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined.
    // You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be
    // globally injected via the bundler config in order to get better tree-shaking in the production bundle.
    // For more details, see https://link.vuejs.org/feature-flags.
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      BASE_URL: '.',
      title: 'Webpack 5 Config for Vue 3',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? 'css/[id].css' : '[id].[contenthash].css',
      ignoreOrder: false,
    })
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json', '.scss', '.html'],
    modules: ['node_modules'],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.mode = 'development';
    config.devtool = 'source-map'; // inline-source-map
  }

  if (argv.mode === 'production') {
    config.mode = 'production';

  }

  return config;
};
