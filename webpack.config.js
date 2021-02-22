var path = require('path');

var config = {
  entry: __dirname + '/src/index.ts',
  devtool: 'source-map',
  output: {
    library: "sr-visualizer",
    libraryTarget: "umd" // exposes and know when to use module.exports or exports
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

module.exports = config;