module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // either js or mjs, we want it be processed by babel
        exclude: /node_modules/, // don't run on node_modules directory
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
