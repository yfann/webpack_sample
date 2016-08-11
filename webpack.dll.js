var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "dll", "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "dist", "dll"),
        filename: "dll.[name].js",
        library: "[name]"//global variable which require() will be assigned to
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            name: "[name]",//global variable
            context: path.resolve(__dirname, "dll")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, "dll"),
        modulesDirectories: ["node_modules"]
    }
};