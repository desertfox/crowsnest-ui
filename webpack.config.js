const path = require("path");

module.exports = {
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
};
