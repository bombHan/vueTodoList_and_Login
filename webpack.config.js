const {
  resolve
} = require('path')
const URL = require('url')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const url = require('url')
const publicPath = ''
const getEntries = require('./webpack.entries');
const mockup = require('./mockup')
module.exports = function(options = {}) {
  let {entry, plugins} = getEntries(options);
  let config = {
    entry: {
      vendor: './src/vendor'
    },
    output: {
      path: resolve(__dirname, 'dist'),
      // webpack2已经支持将hash作为文件查询参数，而不是文件名本身，这在webpack1.x中需要借助gulp工具，下方extract-text-webpack-plugin同理也支持了该做法
      filename: options.dev ? '[name].js' : '[name].js?[chunkhash:8]',
      chunkFilename: options.dev ? '[id].js' : '[id].js?[chunkhash]',
      publicPath: options.dev ? '' : publicPath
    },
    module: {
      rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.ejs$/,
          use: ['ejs-loader']
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              root: resolve(__dirname, 'src'),
              attrs: ['img:src', 'link:href']
            }
          }]
        },
        {
          test: /\.pug$/,
          use: [{
            loader: 'pug-loader',
            options: {
              pretty: options.dev
            }
          }]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
          test: /\.sass$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /favicon\.png$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }]
        },
        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          exclude: /favicon\.png$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: options.dev ? '[name].css' : '[name].css?[contenthash:8]',
        allChunks: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
        '@': resolve(__dirname, 'node_modules')
      }
    },
    // hotModuleReplacement模式下，文件在内存中，没有真正生成，使用webpack-dev-middleware的方法输出文件内容
    devServer: {
      contentBase: ['dist', 'mock'],
      host: '0.0.0.0',
      proxy: {
        '/api/': {
          target: 'http://127.0.0.1:8080',
          bypass: function(res, req, next){
            let url = res.url;
            let urlObject = URL.parse(url)
            if (options.mock) {
                return mockup[urlObject.pathname];
            }
          }
        }
      },
      historyApiFallback: {
        index: url.parse(options.dev ? '' : publicPath).pathname
      },
      setup: function(app, middleware){
        // 添加路由
      }
    },
    devtool: options.dev ? '#source-map' : '#source-map'
  }
  Object.assign(config.entry, entry);
  config.plugins = config.plugins.concat(plugins)
  return config;
}