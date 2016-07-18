var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        index:'./src/index.js',
    },
	output: {
        filename: '[name].bundle.js',
        path: __dirname + "/dist/scripts",
	},
    module: {
        loaders: [
            {
                test:/\.(js|jsx)$/,
                loader:'babel',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    }
};