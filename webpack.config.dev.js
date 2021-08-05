const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        port: 8088,
        contentBase: "./",
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});
