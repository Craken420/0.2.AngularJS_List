const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    })
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
