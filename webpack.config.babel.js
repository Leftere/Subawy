const webpack = require('webpack')
const path = require('path')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENV_PROD = process.env.NODE_ENV === 'production'

const entry = process.env.FORCE_CONTENT === 'true'
  ? './src/entry'
  : './src/entry.prod'


module.exports = {
  entry: {
    app: ['babel-polyfill', entry]
  },

  output: {
    filename: 'dmb.js',
    path: `${__dirname}/build`
  },

  devServer: {
    port: 3000,
    clientLogLevel: 'none',
    stats: {
      assets: false,
      modules: false,
      chunks: true,
      timings: true,
      children: false,
      assets: false,
      chunkModules: false,
    },
    contentBase: './build'
  },

  devtool: ENV_PROD ? false : 'eval',

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['.js']
  },

  plugins: [
    /**
     * Define free variables.
     * Useful for having development builds with debug logging or adding global constants.
     *
     * process.env=PRODUCTION puts React into production mode
     */
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
      'process.env.USER': JSON.stringify(process.env.USER),
      'process.env.SHOW_DEV_INFO': JSON.stringify(process.env.SHOW_DEV_INFO),
      'process.env.BUILD_TIME': JSON.stringify( new Date() )
    }),

    /*
     * Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    /*
     * When there are errors while compiling, this plugin skips the emitting phase
     */
    new webpack.NoEmitOnErrorsPlugin(),

    /*
     * Automatically loaded modules. Module (value) is loaded when the identifier (key)
     * is used as free variable in a module.
     */
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader?cacheDirectory=true'
        ],
        include: [
          path.resolve(__dirname, 'src')
        ]
      },

      {
        test: /\.css|pcss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.(gif|svg)$/i,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(jpe?g|png)$/i,
        use: [
          'file-loader',
          'webp-loader'
        ]
      },

      {
        test: /\.webp$/i,
        use: [
          'file-loader',
        ]
      },

      {
        test: /\.(otf|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },

      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ]
  }
}
