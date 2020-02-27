const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
  entry: {
    "app": "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].js',
  },
  devServer: {
    hot: true,
    port: 8000,
    historyApiFallback: true,
  },
  
  module: {
    rules: [
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 9000,
            name: 'images/[name].[ext]'
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCSSExtractPlugin.loader
      //     },
      //     "css-loader"]
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ]
}