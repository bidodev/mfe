const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

function getDomain(){
  const stages ={
    dev: process.env.PRODUCTION_DOMAIN, // right now we have only this domain configured
    int: process.env.PRODUCTION_DOMAIN_INT,
    qa: process.env.PRODUCTION_DOMAIN_QA,
    prod: process.env.PRODUCTION_DOMAIN_PROD,
  }
  return stages[process.env.STAGE]
}

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", // host module do need name, but it's fine to have it.
      /**
       * We're assuming that our remotes will be hosted inside the same domain
       * But we can also have it in different subdomains e.g // marketing: `marketing@${domain}/remoteEntry.js`
       */
      remotes: {
        marketing: `marketing@${getDomain()}/marketing/latest/remoteEntry.js`,
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
