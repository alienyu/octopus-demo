let webpack = require('webpack');
let merge = require("webpack-merge");
let baseConf = require(process.cwd() + "/build/env/base.js");
let env = process.env.NODE_ENV;
let perConf;
if(!env || (env == "local")) {
    perConf = require(process.cwd() + "/build/config/localConf.json")
} else {
    perConf = require(process.cwd() + "/build/config/releaseConf.json");
}
let platform = perConf.platform;
module.exports = merge(baseConf, {
    entry: {
        "common-vendor": [platform == "web" ? 'jquery' : 'zepto']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common-vendor'],
            minChunks: Infinity
        })
    ]
});