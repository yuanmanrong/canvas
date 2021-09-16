const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './main.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      hot: true
    },
    plugins:[
      new HtmlWebpackPlugin({
      title: "小球碰撞"
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader","css-loader"]
          
        }
      ]
    }
   

}