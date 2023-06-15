const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

module.exports = (env) => {
  const config = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "crow.bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }), 
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(env.APP_URL),
      }),
    ],
  };

  return config;
};