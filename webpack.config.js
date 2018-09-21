module.exports = {
    entry: ["./src/index.js"],
    output: {
      path: __dirname,
      publicPath: "/",
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: "babel"
      }]
    },
    resolve: {
      extensions: ["", ".js", ".jsx"]
    },
    devServer: {
      contentBase: "./"
    }
  },
  devServer: {

    compress: true,

    disableHostCheck: true, // That solved it

  };