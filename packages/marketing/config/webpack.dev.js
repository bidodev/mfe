const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

// provides it to webpack when we are running in development mode.
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
};

module.exports = merge(commonConfig, devConfig); // devConfig as second parameter will overwrite any common properties found on commonConfig
