const LoadablePlugin = require("@loadable/webpack-plugin");
const merge = require("webpack-merge");

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new LoadablePlugin()],
};

const client = merge(baseConfig, {});

const server = merge(baseConfig, {});

module.exports = [client, server];
