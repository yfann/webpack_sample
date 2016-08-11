# Test webpack

## CMD

+ `cnpm i xxx --save-dev`
+ `set DEBUG=true` && `webpack-dev-server`
+ `webpack-dev-server --hot --inline`
+ `npm run dev`

## Plugin

+ html-webpack-plugin
+ open-browser-webpack-plugin  //输入'webpack-dev-server',自动打开新tab
+ bundle-loader  //bundle多大时的分包

## Build Dll

1. create vendors.js
2. create webpack.dll.js
3. `webpack --config=webpack.dll.js`
4. add webpack.DllReferencePlugin to webpack.config.js


## Ref

+ [webpack-demos](https://github.com/ruanyf/webpack-demos)
