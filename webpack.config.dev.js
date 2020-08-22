const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dev')
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 9000,
        open: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ],
            }
        ]
    }
};