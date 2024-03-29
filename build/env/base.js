let path = require('path');
let webpack = require('webpack');
let env = process.env.NODE_ENV;
let perConf;
if(!env || (env == "local")) {
    perConf = require("../config/localConf.json")
} else {
    perConf = require("../config/releaseConf.json");
}
let platform = perConf.platform;
let projectPath = perConf.projectPath;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let moduleName = platform + "-" + projectPath.replace("/", "-");

module.exports =  {
    output: {
        filename: '[name].js',           //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: platform == "web" ? 'jquery' : 'zepto',
            _: "underscore"
        }),

        new ExtractTextPlugin('[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publicePath

        new webpack.HotModuleReplacementPlugin() //热加载
    ],
    resolve: {
        extensions: ['', '.js', '.vue', '.jsx'],
        alias: {
            'common-css': process.cwd() + "/common/assets/css/common.less",
            'common-imgs': process.cwd() +  "/common/assets/imgs",
            'biz-imgs': process.cwd() + "/page/" + platform + "/" + projectPath + "/static/imgs",
            zepto: process.cwd() + '/common/assets/js/vendor/zepto.js',
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ["react"]
                }
            },{
                test: /\.css$/,
                //配置css的抽取器、加载器。'-loader'可以省去
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.less$/,
                //配置less的抽取器、加载器。中间!有必要解释一下，
                //根据从右到左的顺序依次调用less、css加载器，前一个的输出是后一个的输入
                //你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
                loader: ExtractTextPlugin.extract('css!less')
            }, {
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src&minimize=false"
            }, {
                //文件加载器，处理文件静态资源
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader?name=' + moduleName + '/common/fonts/[name].[ext]'
            }, {
                //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                //如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192&name=' + moduleName + '/common/imgs/[hash].[ext]'
            }
        ]
    }
};