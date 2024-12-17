const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    //will automatically inject bundle js into ./dist/index.html
    new HTMLWebpackPlugin({
      title: "Production",
      template: "./index.html", //source
      filename: "./index.html", //destination
    }),
  ],
};
