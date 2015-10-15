module.exports = {
  context: __dirname + "/src",
  entry: "./js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
