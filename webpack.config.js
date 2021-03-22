const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [{
                test: /\.(s[ac]|c)ss$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ""
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};