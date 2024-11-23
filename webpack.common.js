const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".d.ts"],
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
        generator: {
          filename: "pdfs/[name].[hash][ext]",
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "./public" }],
    }),
  ],
};
