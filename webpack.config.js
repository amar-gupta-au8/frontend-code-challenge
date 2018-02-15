const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
    },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ],
};
