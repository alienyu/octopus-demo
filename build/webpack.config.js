let merge = require("webpack-merge");
let envConf;
let env = process.env.NODE_ENV;
let perConf;
if(!env || (env == "local")) {
    perConf = require("./config/localConf.json")
} else {
    perConf = require("./config/releaseConf.json");
}
let platform = perConf.platform;
let projectPath = perConf.projectPath;
let pageName = perConf.pageName || "";

if(env) {
    envConf = require("./env/prod.js");
} else {
    envConf = require("./env/dev.js");
}
module.exports = envConf;