const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')

module.exports = merge(base,{
    entey:{
        client:path.resolve(__dirname,'../src/entry-client.js')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/web/index.html'),
            filename:'index.html'
        })
    ]
})