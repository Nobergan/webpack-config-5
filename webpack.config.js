const path = require('path');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    filename: "js/index.[fullhash].js",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin(),
// {
//       filename: "css/styles.[hash].css",
//     }
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};