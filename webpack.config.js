var path = require('path')

const PATHS = {
  app: path.resolve('../src'),
  dist: path.resolve('../dist')
}

module.exports = {
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  entry: PATHS.app,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
