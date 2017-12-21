var path = require('path');
module.exports = {
    entry: {
        demo: [path.join(__dirname, '/src/app.js')]//node将地址拼接起来
    },
    output: {
        path: __dirname + '/asserts',
        publicPath: '/asserts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test:/\.js$/,
            exclude: /(node_modules)/,//排除某些文件，排除此文件D38文件，加载速度非常慢
            loader: 'babel-loader',
            query: {
                presets : ['es2015', 'react']
            }
        }]
    }
}