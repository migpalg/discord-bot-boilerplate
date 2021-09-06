/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: process.env.NODE_ENV || 'development',
};

module.exports = {
  entry: {
    server: './src/index.ts',
  },
  mode: config.mode,
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
  target: 'node',
  devtool: config.mode === 'development' ? 'eval-source-map' : false,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?(js|ts)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
