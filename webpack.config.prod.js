const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry:'./index.js',
    output:{
        filename: "main.bundle.js",
        path: __dirname +'/dist/'
    },
    plugins:[new MiniCssExtractPlugin({
        filename: 'main.min.css'
    }),
new CleanWebpackPlugin()],
    module:{
        rules:[
            {
                test:/[.]scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]

    }
    
}