var webpack = require('webpack');
var Uglify=webpack.optimize.UglifyJsPlugin;
var HtmlPlugin=require('html-webpack-plugin');
var OpenBrowser=require('open-browser-webpack-plugin');
var Common=require('webpack/lib/optimize/CommonsChunkPlugin');

var devFlag=new webpack.DefinePlugin({
    _DEV_:JSON.stringify(JSON.parse(process.env.DEBUG||'false'))
});

module.exports = {
    // devtool: 'source-map',
    // debug: true,
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/index.js',
        './src/addon.js'
    ],
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
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' }

        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    },
    plugins:[
        // new Uglify({
        //     compress:{
        //         warnings:false
        //     }
        // }),
        new HtmlPlugin({
            title:'Webpack sample',
            filename: __dirname + '/dist/index.html',
            template: __dirname + '/src/assets/index.html'
        }),
        // new OpenBrowser({
        //     url:'http://localhost:8080'
        // }),
        devFlag,
        new Common('common.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
};