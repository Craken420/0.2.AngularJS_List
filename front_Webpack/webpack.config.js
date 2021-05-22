const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development'
        })
    ]
}