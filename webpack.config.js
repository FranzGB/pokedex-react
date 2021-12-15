const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx",".css"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ,
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname,'dist'),
    open: true,
    watchContentBase: true,
  },
};
module.exports = config;