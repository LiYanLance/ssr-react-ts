const path = require("path")

module.exports = {
  name: 'client side',
  mode: "development",
  entry: {
    serverApp: path.resolve(__dirname, "../src/client/clientApp.tsx")
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public')
  },
  target: 'web',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[hash]-[name].[ext]",
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};
