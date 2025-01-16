const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  // recommended production sourcemap value
  // devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean the dist directory before building
    clean: true,
  },
  module: {
    rules: [
      // babel transpiles our code into js that all browsers can understand. this allows us to use bleeding edge js
      // and be safe that older browser versions will still run our js. the `targets` section below is the list of
      // browsers we want our code to be able to run on. "defaults" gives a "reasonable configuration for most users"
      // according to https://github.com/browserslist/browserslist#queries
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};
