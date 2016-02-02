const webpack = require('webpack');
module.exports = {
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
  'webpack/hot/only-dev-server',
  './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
}),

  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
