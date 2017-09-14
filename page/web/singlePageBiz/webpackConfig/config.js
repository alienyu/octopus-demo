let webpack = require('webpack');
let merge = require("webpack-merge");
let baseConf = require(process.cwd() + "/build/env/base.js");
module.exports = merge(baseConf, {
    entry: {
        'vue-vendor': ['element-ui', 'vue', 'vue-router', 'vue-resource']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vue-vendor'],
            minChunks: Infinity
        })
    ]
});