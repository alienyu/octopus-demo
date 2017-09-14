let webpack = require('webpack');
let merge = require("webpack-merge");
let baseConf = require(process.cwd() + "/build/env/base.js");
module.exports = merge(baseConf, {
    entry: {
        'react-vendor': ['react', 'react-dom']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react-vendor'],
            minChunks: Infinity
        })
    ]
});