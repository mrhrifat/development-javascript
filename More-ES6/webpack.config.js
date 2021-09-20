const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register')

module.exports = {
    //Entry
    entry: ['@babel/polyfill', './src/scripts/index.js'],

    //Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //Module
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    //Plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
    ,

    //Dev Server
    devServer: {
        open: true,
        compress: true,
        // contentBase: './dist'
    },

    //Mode
    mode: 'development',

    //Devtoo
    devtool: 'inline-source-map'
}