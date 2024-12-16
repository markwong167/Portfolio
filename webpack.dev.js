const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "",
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "static"),
    },
    hot: true,
    open: true,
    compress: true,
    port: 8080,
    client: {
      overlay: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
});
