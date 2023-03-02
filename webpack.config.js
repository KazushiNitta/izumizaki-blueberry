const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
}
