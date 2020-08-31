const path = require("path")
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server side',
  mode: "development",
  entry: {
    serverApp: path.resolve(__dirname, "../src/server/serverApp.ts")
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
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
        test: /\.html$/,
        use: ["raw-loader"]
      }
    ]
  },
  externals: [nodeExternals()]
};
