module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
