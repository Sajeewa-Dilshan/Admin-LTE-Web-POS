
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { default: merge } = require("webpack-merge");





const superConfig=require('./webpack.config');

module.exports= merge(superConfig,{
  //  string = "false",
    plugins:[
        new MiniCssExtractPlugin({
            filename:"main.min.css"
        })],
    
 
devServer: {
port:3000

},
mode: 'development'


})