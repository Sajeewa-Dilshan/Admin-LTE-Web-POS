const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const webpackMerge = require("webpack-merge");
//const merge=require('webpack-merge');

const { default: merge } = require("webpack-merge");





const superConfig=require('./webpack.config');

module.exports= merge( superConfig,{
    plugins:[
        new MiniCssExtractPlugin({
            filename:"main.[contenthash].min.css"
        }),
    new CleanWebpackPlugin(),
],output:{
    filename:'main.[contenthash].bundle.js'},

mode: 'production'

})