const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common,{
    devtool:'inine-source-map',
    devServer:{
        contentBase:'./dist'
    }
})