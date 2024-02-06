const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: { filename: "bundle.js" },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }) 
    ],
    module: { 
        rules: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        hot: true,
    },
};