const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: {
    index: './client/index.js',
    styles: './client/style/style.scss',
  },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  mode: process.env.NODE_ENV, // "development" or "production"
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    static: './client',
    historyApiFallback: true,
    proxy: {
      '/api/**': {target: 'http://localhost:3000', secure: false},
      '/auth/**': {target: 'http://localhost:3000', secure: false},
    }
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
