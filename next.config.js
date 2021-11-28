const { parsed: localEnv } = require("dotenv").config();

const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    const env = process.env;
    config.plugins.push(new webpack.DefinePlugin(env));

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
  env : process.env
};
